import {debug, setFailed, setOutput, info, error} from '@actions/core'
import _ from 'lodash'

const resolve = require('path').resolve
import {inspect} from 'util'
// import {error} from '@actions/core'
import Input from './input'
import {generateChangelog} from './model/changelog'

export const run = async () => {
  const inputs = new Input().inputs
  info(`Inputs: ${inspect(inputs)}`)
  debug('')

  let options = _.omitBy({
    preset: '',
    append: true,
    releaseCount: 0,
    skipUnstable: false,
    outputUnreleased: true
  }, _.isUndefined)

  // if config!!!
  // if *.js
  const config = require(resolve(process.cwd(), 'config/config.json'))
  options.config = config
  // if *.json
  options = _.merge(options, config.options)
  // debug(`changelog options: ${inspect(options)}`)
  try {
    const changelog = await generateChangelog(options)
    setOutput('changelog', changelog)
  } catch (err) {
    error(err)
  }
}

run()
  .then(() => {
  })
  .catch((error) => {
    setFailed(error.message)
  })
