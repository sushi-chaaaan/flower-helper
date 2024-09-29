import { type Result, err, ok } from "neverthrow";
import { getFirstMatch } from "../../utils/string";

export type FormConfig = {
  formUrl: string;
  discordIdFieldId: string;
};

// フォームのURLから事前入力用の設定を取得する
const PREFILL_REGEXP = /entry\.(\d+)/;
type GetFormConfigFromUrl = (formUrl: string | URL) => Result<FormConfig, "FIELD_NOT_FOUND">;

export const getFormConfigFromUrl: GetFormConfigFromUrl = (formUrl) => {
  const url = new URL(formUrl);
  const discordIdFieldId = getFirstMatch(url.searchParams.keys(), PREFILL_REGEXP);

  if (!discordIdFieldId) {
    return err("FIELD_NOT_FOUND");
  }

  return ok({
    formUrl: `${url.origin}${url.pathname}`,
    discordIdFieldId
  });
};

// 事前入力済みURLを生成する
type GetPrefilledUrl = (config: FormConfig, discordId: string) => string;

export const getPrefilledUrl: GetPrefilledUrl = (config, discordId) => {
  const url = new URL(config.formUrl);
  url.searchParams.set("usp", "pp_url");
  url.searchParams.set(config.discordIdFieldId, discordId);
  return url.toString();
};
