const path = require('path')
const webpack = require('webpack')
const chalk = require('chalk')
const ora = require('ora')
const webpackProdConfig = require('./webpack.prod.conf')
const webpackComponentConfig = require('./webpack.components.conf')

const spinner = ora('building for production...')
spinner.start()

webpack([
  webpackProdConfig,
  webpackComponentConfig
], (err, stats) => {
  if (err) throw err

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  spinner.succeed(chalk.green('Build complete.\n'));
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})