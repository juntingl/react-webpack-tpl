/**
 * 获取环境标识
 * @returns string
 */
export const getEnv = () => {
  const host = location.hostname;
  let env = "";

  if (/localhost|^192\.168|^172\.30|^127\.0\.0\.1|^0\.0\.0\.0/.test(host)) {
    env = "dev";
  } else {
    // DESC: Safari 不支持环视
    const reg = /(?<=-)[dev|stg|pre|gra]+(?=\.)/g;
    env = host.match(reg)?.[0] ?? "prod";
  }
  return env;
};
