const { spawn } = require('child_process');
const pathModule = require('path');

module.exports = ({ repo, path }) => {
  console.log(repo, pathModule.resolve(path));
  return new Promise((resolve, reject) => {
    const process = spawn('git', ['clone', repo, pathModule.resolve(path)]);

    process.stderr.on('data', data => {
      console.log(
        'an error occurred please raise an issue if this continues https://github.com/Karyum/Create-Karyum-App-npm',
      );
    });

    return process.on('close', status => {
      if (status === 0) {
        resolve();
      } else {
        reject(new Error("'git clone' failed with status " + status));
      }
    });
  });
};
