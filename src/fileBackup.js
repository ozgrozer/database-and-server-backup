const path = require('path')
const _exec = require('./_exec')

const fileBackup = (config) => {
  return new Promise((resolve, reject) => {
    _exec(`rsync -r ${config.server} ${path.join(config.backupFolder, 'files')}`)
      .then((res) => {
        resolve(config)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = fileBackup
