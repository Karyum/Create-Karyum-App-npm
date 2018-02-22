const { exec } = require('child_process');

module.exports = ({ path }) => {
  exec(`rm -rf ${path}/.git`, err => {
    new Promise((resolve, reject) => {
      if (err)
        reject(
          new Error(
            'Something went wrong please try again. if you problem was not resolved please raise an issue on the matter https://github.com/Karyum/Create-Karyum-App-npm',
          ),
        );
      else resolve();
    });
  });
};
