import Parser from "srt-parser-2";

interface SRTItem {
  startTime: string;
  endTime: string;
  text: string;
}

interface ASSItem {
  startTime: string;
  endTime: string;
  text: string;
  style: string;
  comment: boolean;
}

interface SRTToAssOptions {
  bracketLineStyle?: string;
  replaceQuotes?: boolean;
  replaceSpaces?: boolean;
  outputDialogueOnly?: boolean;
  logToConsole?: boolean;
  logger?: (message: string) => void;
}

const parser = new Parser();

export function srtToAss(srt: string, options: SRTToAssOptions = {}): string {
  const {
    bracketLineStyle = "Top",
    replaceQuotes = false,
    replaceSpaces = false,
    outputDialogueOnly = false,
    logToConsole = true,
    logger,
  } = options;

  // 日志输出函数
  const log = (message: string) => {
    if (logToConsole) {
      console.log(message);
    }
    if (logger) {
      logger(message);
    }
  };

  const parsedSrt: SRTItem[] = parser.fromSrt(srt);
  log(`[解析SRT文件][0] 成功，共${parsedSrt.length}条字幕`);
  const newSubtitleArray: ASSItem[] = [];

  // 处理多行字幕
  for (const item of parsedSrt) {
    if (item.text.includes("\n")) {
      log(`[拆分多行][${parsedSrt.indexOf(item)}] ${JSON.stringify(item.text)}`);
      let lines = item.text.split("\n");

      // 合并中文台词的两行
      for (let j = 0; j < lines.length - 1; j++) {
        const chinesePunctuation = /[，。！？；：、（）《》【】“”‘’]/;
        const currentLineEndsWithPunctuation = chinesePunctuation.test(
          lines[j].slice(-1)
        );
        const nextLineStartsWithPunctuation = chinesePunctuation.test(
          lines[j + 1].charAt(0)
        );

        if (
          lines[j].match(/[\u4e00-\u9fff]/) &&
          lines[j + 1].match(/[\u4e00-\u9fff]/) &&
          !currentLineEndsWithPunctuation &&
          !nextLineStartsWithPunctuation
        ) {
          log(`[合并中文台词][${parsedSrt.indexOf(item)}] ${JSON.stringify([lines[j], lines[j + 1]])}`);
          lines[j] = lines[j] + "　" + lines[j + 1];
          lines.splice(j + 1, 1);
          j--;
        }
      }

      // 处理跨行括号
      for (let j = 0; j < lines.length; j++) {
        if (
          lines[j].match(/\(|（/g) &&
          lines[j].match(/\)|）/g) == null &&
          lines[j + 1]?.match(/\(|（/g) == null &&
          lines[j + 1]?.match(/\)|）/g)
        ) {
          log(`[合并跨行括号][${parsedSrt.indexOf(item)}] ${JSON.stringify([lines[j], lines[j + 1]])}`);
          lines[j] = lines[j] + lines[j + 1];
          lines.splice(j + 1, 1);
          log(`[合并跨行括号结果][${parsedSrt.indexOf(item)}] ${JSON.stringify(lines[j])}`);
        }

        const newSubtitle: ASSItem = {
          startTime: item.startTime,
          endTime: item.endTime,
          text: lines[j],
          style: "Default",
          comment: false,
        };
        newSubtitleArray.push(newSubtitle);
      }
    } else {
      const thisSrtLine: ASSItem = {
        startTime: item.startTime,
        endTime: item.endTime,
        text: item.text,
        style: "Default",
        comment: false,
      };
      newSubtitleArray.push(thisSrtLine);
    }
  }

  // 处理多重对话
  for (let i = 0; i < newSubtitleArray.length; i++) {
    const subtitle = newSubtitleArray[i];

    // 删除残留横杠
    if (subtitle.text.startsWith("-") && subtitle.text.split("-").length == 2) {
      subtitle.text = subtitle.text.replace(/^-/, "");
    }

    // 分割单行多重对话
    const splitThisLine = subtitle.text.split("-");
    if (
      splitThisLine.length >= 3 &&
      splitThisLine[0] == "" &&
      splitThisLine[1] != "" &&
      splitThisLine[2] != ""
    ) {
      splitThisLine.splice(0, 1);
      for (let j = 0; j < splitThisLine.length; j++) {
        splitThisLine[j] = splitThisLine[j].trim();
        const thisNewSubtitle: ASSItem = {
          startTime: subtitle.startTime,
          endTime: subtitle.endTime,
          text: splitThisLine[j],
          style: "Default",
          comment: false,
        };
        newSubtitleArray.splice(i + 1, 0, thisNewSubtitle);
        subtitle.comment = true;
      }
    }
  }

  // 合并重复字幕
  for (let i = 0; i < newSubtitleArray.length; i++) {
    for (let j = 0; j < newSubtitleArray.length; j++) {
      if (
        newSubtitleArray[j].startTime == newSubtitleArray[i].endTime &&
        newSubtitleArray[j].text == newSubtitleArray[i].text
      ) {
        log(`[合并分裂行][${newSubtitleArray.indexOf(newSubtitleArray[i])} ==> ${newSubtitleArray.indexOf(newSubtitleArray[j])}](${newSubtitleArray[i].endTime} => ${newSubtitleArray[j].endTime}) ${newSubtitleArray[j].text}`);
        newSubtitleArray[i].endTime = newSubtitleArray[j].endTime;
        newSubtitleArray.splice(j, 1);
        j--;
        log(`[合并分裂行结果][${newSubtitleArray.indexOf(newSubtitleArray[i])}] 结束时间更新为：${newSubtitleArray[i].endTime}`);
      }
    }
  }

  // 应用样式和转换选项
  for (const subtitle of newSubtitleArray) {
    // 括号行样式
    if (bracketLineStyle) {
      if (
        (subtitle.text.startsWith("(") && subtitle.text.endsWith(")")) ||
        (subtitle.text.startsWith("（") && subtitle.text.endsWith("）"))
      ) {
        log(`[括号行样式][行 ${newSubtitleArray.indexOf(subtitle)}] ${subtitle.text} 更换为 ${bracketLineStyle} 样式`);
        subtitle.style = bracketLineStyle;
      }
    }

    // 替换全角空格
    if (replaceSpaces) {
      log(`[替换全角空格][${newSubtitleArray.indexOf(subtitle)}] ${JSON.stringify(subtitle.text)}`);
      subtitle.text = subtitle.text.replace(/ /g, "　");
    }

    // 替换简中引号
    if (replaceQuotes) {
      if (subtitle.text.match(/\“|\”/)) {
        log(`[变成方括号][${newSubtitleArray.indexOf(subtitle)}] ${subtitle.text}`);
        subtitle.text = subtitle.text.replace(/“/g, "「").replace(/”/g, "」");
      }
    }
  }

  // 生成ASS文件内容
  const nowTime = new Date();
  const nowTimeText = `${nowTime.toLocaleString("zh-CN", {
    hour12: false,
  })} (${nowTime.getTime()})`;

  let ass = `[Script Info]
; Script generated by LavaAnimeSubTools
; Generate time: ${nowTimeText}
Title: New Subtitle
Original Script: LavaAnimeSubTools
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
PlayResX: 1920
PlayResY: 1080

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,更纱黑体 SC Semibold,72,&H00FFFFFF,&H00FFFFFF,&H002A2A2A,&HFF0E0807,0,0,0,0,100,100,1,0,1,3,0,2,135,135,24,1
Style: Top,更纱黑体 SC Semibold,58,&H00FFFFFF,&H00FFFFFF,&H000A0A0A,&HFF0E0807,0,0,0,0,100,100,1,0,1,2,0,8,135,135,20,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;

  if (outputDialogueOnly) {
    ass = "";
  }

  for (const subtitle of newSubtitleArray) {
    let thisStartTime = subtitle.startTime.slice(1, 11).replace(",", ".");
    let thisEndTime = subtitle.endTime.slice(1, 11).replace(",", ".");

    const isThisLineComment = subtitle.comment ? "Comment" : "Dialogue";
    const thisAssLine = `${isThisLineComment}: 0,${thisStartTime},${thisEndTime},${subtitle.style},,0,0,0,,${subtitle.text}\n`;
    ass = ass.concat(thisAssLine);
  }

  if (newSubtitleArray.length == 0) {
    return "";
  }

  return ass;
}
