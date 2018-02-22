const { exec } = require('child_process');
const { promisify } = require('util');
const asyncExec = promisify(exec);

module.exports = ({ path }) =>
  new Promise((resolve, reject) => {
    asyncExec(`rm -rf ${path}/.git`)
      .then(resolve)
      .catch(() =>
        reject(
          new Error(
            'Something went wrong please try again. if you problem was not resolved please raise an issue on the matter https://github.com/Karyum/Create-Karyum-App-npm',
          ),
        ),
      );
  });
