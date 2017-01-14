'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      type: String,
      required: true
    });
  }

  prompting() {
    this.log(yosay(
      'Welcome to the super-duper ' + chalk.red('generator-library') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'description',
        message: 'Library description',
        default: ''
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.props.name = this.options.name;
      this.props.pluginname = this.options.name.match(/[^-]\w+$/)[0];
      this.env.cwd = path.join(this.env.cwd, this.options.name);
    }.bind(this));
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('**/.*'),
      this.destinationPath(),
      this.props
    );

    this.fs.copy(
      this.destinationPath('lib/lib.js'),
      this.destinationPath(path.join('lib', `${this.props.name}.js`))
    );
    this.fs.delete(path.join(this.props.name, 'lib/lib.js'));

    this.fs.copy(
      this.destinationPath('main.js'),
      this.destinationPath(path.join(`${this.props.name}.js`))
    );
    this.fs.delete(this.destinationPath('main.js'));
  }

  install() {
    process.chdir(this.env.cwd);
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true,
      callback() {
        console.log(yosay('Everything is ready!'));
      }
    });
    // this.runInstall('yarn', [],  err => {
    //   if (err) {
    //     throw new Error(err);
    //   }
    //
    //   console.log(yosay('Complete!'));
    // });
  }
}
