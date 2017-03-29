const exist = require('./exist')
const config = require('./config/config')
const fallbackConfigOptions = [ 'clipboard', 'json', 'verbose', 'instance' ]

module.exports = (program) => {
  program.lang = program.lang || config.lang || require('./local_lang')
  fallbackConfigOptions.forEach(fallbackToConfigOption(program))
}

const fallbackToConfigOption = (program) => (parameter) => {
  // Don't use '||' as it doesn't play well with boolean values
  if (!exist(program[parameter])) program[parameter] = config[parameter]
}