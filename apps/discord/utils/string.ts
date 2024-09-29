/**
 * 指定されたパターンに一致する最初の文字列をイテレータから取得します。
 *
 * 文字列の場合は完全一致、正規表現の場合は`RegExp.test()` の結果が `true` となるものを取得します。
 *
 * @param iter - 文字列のイテレータ。
 * @param pattern - 一致させるパターン。文字列または正規表現。
 * @returns 最初に一致した文字列。見つからない場合は `undefined` を返します。
 */
export const getFirstMatch = (iter: Iterable<string>, pattern: string | RegExp) => {
  for (const value of iter) {
    if (pattern instanceof RegExp) {
      if (pattern.test(value)) {
        return value;
      }
    } else {
      if (value === pattern) {
        return value;
      }
    }
  }
  return undefined;
};
