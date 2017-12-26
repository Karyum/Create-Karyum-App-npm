const { clone, removeRepo } = require('./util/clone-repo.js');

const path = `${process.env.PWD}/${process.argv[2]}`;
const repo = 'git@github.com:Karyum/React-Simple-Setup.git';

clone(repo, path, err => {
  if (err) {
    console.log(
      `Something went wrong, maybe you already have a project called "${
        process.argv[2].split('/')[0]
      }"?`
    );
  } else {
    removeRepo(repo, path, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Done. Enjoy the Balance');
      }
    });
  }
});
