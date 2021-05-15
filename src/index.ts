import {setFailed, setOutput, info, debug, error} from '@actions/core'
import _ from 'lodash'
import {inspect} from 'util'

// const resolve = require('path').resolve
import Input from './input'
import {generateChangelog} from './model/changelog'
import staticConfig from './config/config.json'

export const run = async () => {
  const inputs = new Input().inputs
  info(`Inputs: ${inspect(inputs)}`)

  let options = _.omitBy(
    {
      preset: '',
      append: true,
      releaseCount: 0,
      skipUnstable: false,
      outputUnreleased: true
    },
    _.isUndefined
  )

  // if config!!!
  // if *.js

  try {
    // todo: add support for external config files
    // const config = require(resolve(process.cwd(), './config/config.json'))
    // console.log(a)
    // @ts-ignore

    options.config = staticConfig
    // if *.json
    options = _.merge(options, staticConfig.options)
    debug(`changelog options: ${inspect(options)}`)
    const changelog = await generateChangelog(options)

    setOutput('config', staticConfig)
    setOutput('changelog', changelog)
  } catch (err) {
    error(err)
  }
}

run()
  .then(() => {})
  .catch(error => {
    setFailed(error.message)
  })
