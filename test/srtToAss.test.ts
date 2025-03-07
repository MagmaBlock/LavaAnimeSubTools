import { describe, it, expect } from "vitest";
import { srtToAss } from "../src/srtToAss";

describe("srtToAss", () => {
  it("should convert basic SRT to ASS", () => {
    const srt = `1
00:00:01,000 --> 00:00:03,000
Hello world!`;

    const result = srtToAss(srt);
    expect(result).toContain("Hello world!");
    expect(result).toContain("Dialogue: 0,0:00:01.00,0:00:03.00");
  });

  it("should handle bracket style option", () => {
    const srt = `1
00:00:01,000 --> 00:00:03,000
(Hello world!)`;

    const result = srtToAss(srt, { bracketLineStyle: "Top" });
    expect(result).toContain("Style: Top");
  });

  it("should handle quote replacement", () => {
    const srt = `1
00:00:01,000 --> 00:00:03,000
“Hello world!”`;

    const result = srtToAss(srt, { replaceQuotes: true });
    expect(result).toContain("「Hello world!」");
  });

  it("should handle multi-line subtitles", () => {
    const srt = `1
00:00:01,000 --> 00:00:03,000
Line 1
Line 2`;

    const result = srtToAss(srt);
    expect(result)
      .toContain(`Dialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,Line 1
Dialogue: 0,0:00:01.00,0:00:03.00,Default,,0,0,0,,Line 2`);
  });

  it("should handle different time formats", () => {
    const srt = `1
00:00:01.500 --> 00:00:03.500
Test time format`;

    const result = srtToAss(srt);
    expect(result).toContain("0:00:01.50,0:00:03.50");
  });

  it("should handle empty input", () => {
    const srt = "";
    expect(() => srtToAss(srt)).toThrow("Invalid SRT format");
  });

  it("should apply custom styles using bracketLineStyle", () => {
    const srt = `1
00:00:01,000 --> 00:00:03,000
(Styled text)`;

    const result = srtToAss(srt, {
      bracketLineStyle: "CustomStyle",
    });
    expect(result).toContain("CustomStyle");
  });

  it("should handle multiple subtitle blocks", () => {
    const srt = `1
00:00:01,000 --> 00:00:03,000
Block 1

2
00:00:04,000 --> 00:00:06,000
Block 2`;

    const result = srtToAss(srt);
    expect(result.match(/Dialogue:/g)).toHaveLength(2);
  });
});
