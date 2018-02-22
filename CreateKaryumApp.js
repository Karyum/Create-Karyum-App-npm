const { clone, removeGit } = require('./utils/index.js');

module.exports = opts => {
  clone(opts)
    .then(removeGit)
    .then(() => console.log('Done. Enjoy the Balance'))
    .catch(e => console.log(e));
};
