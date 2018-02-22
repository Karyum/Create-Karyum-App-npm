const clone = require('./util/clone-repo.js');
const removeGit = require('./util/remove-git.js');

module.exports = opts => {
  clone(opts)
    .then(removeGit(opts))
    .then(console.log('Done. Enjoy the Balance'))
    .catch(e => console.log(e));
};
