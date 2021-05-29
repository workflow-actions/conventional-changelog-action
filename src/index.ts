import * as _ from 'lodash'
import {setOutput, setFailed, debug} from '@actions/core'

// const resolve = require('path').resolve
import {generateChangelog} from './changelog'
import {Config} from './config/config'

export const run = async () => {
  const cfg = new Config()

  const options = _.omitBy(
    {
      preset: cfg.config.options.preset,
      append: false,
      releaseCount: 0,
      skipUnstable: false,
      outputUnreleased: true,
      config: cfg.config
    },
    _.isUndefined
  )

  try {
    // todo: add support for external config files
    // const config = require(resolve(process.cwd(), './preset.json'))
    debug(`changelog options: ${JSON.stringify(options)}`)
    const changelog = await generateChangelog(options)
    console.log(changelog)
    setOutput('config', cfg.config)
    setOutput('changelog', changelog)
  } catch (error) {
    setFailed(error)
  }
}

run().then(() => {})
