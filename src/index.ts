// import {setFailed, setOutput, error} from '@actions/core'
import * as _ from 'lodash'
import {setOutput, setFailed, debug} from '@actions/core'

const resolve = require('path').resolve
import {generateChangelog} from './changelog'
import {Config} from './config/config'

export const run = async () => {
  const cfg = new Config()
  console.log(cfg.apiUrl)

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
    console.log(process.cwd())
    const config = require(resolve(process.cwd(), './preset.json'))
    console.log(typeof config)
    console.log(0)
    options.config = config
    // if *.json
    options = _.merge(options, config.options)
    debug(`changelog options: ${JSON.stringify(options)}`)
    const changelog = await generateChangelog(options)
    console.log(changelog)
    setOutput('config', 'test')
    // setOutput('config', cfg.config.options)
    // setOutput('changelog', changelog)
  } catch (error) {
    setFailed(error);
  }
}

run().then(() => {});
