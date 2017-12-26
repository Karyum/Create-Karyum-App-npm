const { spawn } = require('child_process');

exports.clone = (repo, targetPath, cb) => {
  const process = spawn('git', ['clone', repo, targetPath]);

  process.on('close', status => {
    if (status === 0) {
      cb && cb();
    } else {
      cb && cb(new Error("'git clone' failed with status " + status));
    }
  });
};

exports.removeRepo = (repo, targetPath, cb) => {
  const process = spawn('git', ['status']);

  process.on('close', status => {
    if (status === 0) {
      cb && cb();
    } else {
      cb &&
        cb(
          new Error(
            'Something went wrong please try again. if you problem was not resolved please raise an issue on the matter https://github.com/Karyum/Create-Karyum-App-npm'
          )
        );
    }
  });
};
