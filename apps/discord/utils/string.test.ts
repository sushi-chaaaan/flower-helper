import { describe, expect, it } from "vitest";
import { getFirstMatch } from "./string";

describe("getFirstMatch", () => {
  it("パターンが文字列の場合、完全一致を返すべき", () => {
    const iter = ["りんご", "ばなな", "さくらんぼ"][Symbol.iterator]();
    const pattern = "ばなな";
    const result = getFirstMatch(iter, pattern);
    expect(result).toBe("ばなな");
  });

  it("パターンが正規表現の場合、最初の一致を返すべき", () => {
    const iter = ["りんご", "ばなな", "あそびば"][Symbol.iterator]();

    const pattern = /ば/;
    const result = getFirstMatch(iter, pattern);

    expect(result).toBe("ばなな");
  });

  it("一致が見つからない場合、undefinedを返すべき", () => {
    const iter = ["りんご", "ばなな", "さくらんぼ"][Symbol.iterator]();
    const pattern = "";
    const result = getFirstMatch(iter, pattern);
    expect(result).toBeUndefined();
  });

  it("空のイテレータの場合、undefinedを返すべき", () => {
    const iter = [][Symbol.iterator]();
    const pattern = "ばなな";
    const result = getFirstMatch(iter, pattern);
    expect(result).toBeUndefined();
  });
});
