'use strict';

const { URL } = require('url');

module.exports = getPublicUrlOrPath;

/**
 * 返回一个 URL 或带末尾带有 / 的路径
 * 在生产中可以是 URL、绝对路径、相对路径
 * 在开发过程中，将是一个绝对路径
 * 在开发中可以使用 "path" 模块进行操作
 *
 * @param {boolean} isEnvDevelopment
 * @param {(string|undefined)} homepage 一个有效的 url 或路径
 * @param {(string|undefined)} envPublicUrl 一个有效的 url 或路径 (优先级最高)
 * @returns {string}
 */
function getPublicUrlOrPath(isEnvDevelopment, homepage, envPublicUrl) {
  // 定义 stubDomain 只是为了保证 new URL 实例时不出错
  const stubDomain = 'https://github.com/JuntingLiu';

  if (envPublicUrl) {
    // ensure last slash exists
    envPublicUrl = envPublicUrl.endsWith('/')
      ? envPublicUrl
      : envPublicUrl + '/';

    // validate if `envPublicUrl` is a URL or path like
    // `stubDomain` is ignored if `envPublicUrl` contains a domain
    const validPublicUrl = new URL(envPublicUrl, stubDomain);

    return isEnvDevelopment
      ? envPublicUrl.startsWith('.')
        ? '/'
        : validPublicUrl.pathname
      : // Some apps do not use client-side routing with pushState.
      // For these, "homepage" can be set to "." to enable relative asset paths.
      envPublicUrl;
  }

  if (homepage) {
    // strip last slash if exists
    homepage = homepage.endsWith('/') ? homepage : homepage + '/';

    // validate if `homepage` is a URL or path like and use just pathname
    const validHomepagePathname = new URL(homepage, stubDomain).pathname;
    return isEnvDevelopment
      ? homepage.startsWith('.')
        ? '/'
        : validHomepagePathname
      : // Some apps do not use client-side routing with pushState.
      // For these, "homepage" can be set to "." to enable relative asset paths.
      homepage.startsWith('.')
        ? homepage
        : validHomepagePathname;
  }

  return '/';
}
