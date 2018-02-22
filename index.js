#!/usr/bin/env node
const inq = require('inquirer');
const path = `${process.env.PWD}/${process.argv[2]}`;
const RE = 'git@github.com:Karyum/react-express-boilerplate.git';
const PWA = 'git@github.com:Karyum/react-pwa-boilerplate.git';

console.log(path);
if (!process.argv[2]) {
  console.log('Please input the name of the project');
  process.exit(1);
}

inq
  .prompt([
    {
      type: 'list',
      name: 'repo',
      message: 'What kind of setup do you need?',
      choices: [
        { name: 'Progressive web app', value: PWA },
        { name: 'React with an express backend', value: RE },
      ],
    },
  ])
  .then(({ repo }) => {
    require('./CreateKaryumApp.js')({ repo, path });
    console.log('Fetching files ..');
  });
