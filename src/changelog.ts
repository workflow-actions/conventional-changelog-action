const conventionalChangelog = require('conventional-changelog')


// TODO:
// - add header
// - test
export const generateChangelog = (config) => {
  return new Promise((resolve, reject) => {
    const stream = conventionalChangelog({ config })
    let changelog = ''

    stream
      .on('data', (data) => {
        const change = data.toString()
        changelog += change
      })
      .on('error', (error) => {
        console.log(`Error: changelog ${error}`)
        reject(error)
      })
      .on('end', () => resolve(changelog))
  })
}
