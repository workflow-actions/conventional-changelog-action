const cch = require('conventional-changelog')

// TODO:
// - add header
// - test
export const generateChangelog = (config) => {
  return new Promise((resolve, reject) => {
    const stream = cch(config)

    let changelog = ''

    stream
      .on('data', (data) => {
        const change = data.toString()
        changelog += change
      })
      .on('error', (error) => reject(error))
      .on('end', () => {
        resolve(changelog)
      })
  })
}
