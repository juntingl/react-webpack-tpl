/**
 * @file check commit message
 */

const chalk = require("chalk");
const msgPath = process.argv[2];
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?: .{3,64}/;
const mergeRE = /^Merge branch.+/;

if (!commitRE.test(msg) && !mergeRE.test(msg)) {
  console.log(
    `\n${chalk.bgRed.white(" ERROR ")} ${chalk.red(
      `Invalid commit message format.
          * Specify the type of commit: feat,fix,docs,style,refactor,perf,test,build,ci,chore,revert
          * Wrap lines at 3 - 64 characters
          * Refer to https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines`,
    )}\n\n`,
  );
  process.exit(1);
}
