const clone = require('git-clone');

const path = `${process.env.PWD}/${process.argv[2]}`;

clone('git@github.com:Karyum/React-Simple-Setup.git', path, err => {
  if (err) {
    console.log('Something messed up mate what happend?');
  }

  console.log('Enjoy the Balance');
});
