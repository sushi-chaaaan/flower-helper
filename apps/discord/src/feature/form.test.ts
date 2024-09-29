import { describe, expect, it } from "vitest";
import { type FormConfig, getFormConfigFromUrl, getPrefilledUrl } from "./form";

describe("getFormConfigFromUrl", () => {
  it("期待通りの設定が返却される", () => {
    const formUrl = "https://example.com/viewform?entry.1234567890=12345";
    const expectedConfig = {
      formUrl: "https://example.com/viewform",
      discordIdFieldId: "entry.1234567890"
    } satisfies FormConfig;

    const result = getFormConfigFromUrl(formUrl);

    expect(result._unsafeUnwrap()).toEqual(expectedConfig);
  });

  it("有効なPrefillフィールドが見つからなければErrorが返る", () => {
    const formUrl = "https://example.com/viewform";
    const expected = "FIELD_NOT_FOUND";

    const result = getFormConfigFromUrl(formUrl);

    expect(result._unsafeUnwrapErr()).toEqual(expected);
  });
});

describe("getPrefilledUrl", () => {
  it("事前入力済みURLを生成できる", () => {
    const config: FormConfig = {
      formUrl: "https://example.com/viewform",
      discordIdFieldId: "discord_id"
    };
    const discordId = "1234567890";
    const expectedUrl = "https://example.com/viewform?usp=pp_url&discord_id=1234567890";

    const result = getPrefilledUrl(config, discordId);

    expect(result).toBe(expectedUrl);
  });
});
