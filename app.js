const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const log = console.log;
const utils = require('./utils');
const notes = require('./notes');
const yargs = require('yargs');
const { command } = require('yargs');

console.log("Hello world! Inside app.js");
//fs.writeFileSync('notes.txt', 'This file was created by node.js.');
//fs.appendFileSync('notes.txt', '\nLater the file was modified by node.js.');
console.log(utils);
console.log(notes());
console.log(validator.isEmail('foo@bar'));

// chalk demo
log(chalk.blue('Hello ') + 'world' + chalk.red('!'));
const info = chalk.bold.green;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
log(info('Success!'));
log(error('Error!'));
log(warning('Warning!'));

//yargs command
log(yargs.argv);
//yargs.command(command: 'add', handler: unknown));