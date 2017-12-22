#!/usr/bin/env node

if (!process.argv[2]) {
  console.log(
    'Please input what would you like youre project to be name after the command'
  );
  return;
}

require('./CreateKaryumApp.js');

console.log('Fetching files ..');
