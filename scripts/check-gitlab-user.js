/**
 * 检测 user.email
 * @file check user email
 */

const chalk = require('chalk');
const author = process.env.GIT_AUTHOR_EMAIL;

const checkAuthor = (author) => {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(author);
};
if (!checkAuthor(author)) {
  throw (
    `${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `Please submit using an email account`,
    )}\n\n` +
    chalk.white(`Please change your account and try submitting again\n`)
  );
}
