const { spawn } = require('child_process');

module.exports = ({ repo, path }) =>
  new Promise((resolve, reject) => {
    const process = spawn('git', ['clone', repo, path]);

    process.on('error', reject);

    process.on('close', (status, a) => {
      if (status === 0) {
        // pass the options to the removeGit function
        resolve({ repo, path });
      } else {
        reject(new Error("'git clone' failed with status " + status));
      }
    });
  });
