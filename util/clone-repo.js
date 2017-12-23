const { spawn } = require('child_process');

module.exports = (repo, targetPath, cb) => {

  const process = spawn('git', ['clone', repo, targetPath]);
  
  process.on('close', (status) => {
    if (status == 0) {
      cb && cb();
    } else {
      cb && cb(new Error("'git clone' failed with status " + status));
    }
  });
};
