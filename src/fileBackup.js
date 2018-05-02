const _exec = require('./_exec')
const config = require('./../.config')

const fileBackup = () => {
  return new Promise((resolve, reject) => {
    _exec(`rsync -r ${config.server} ./backup/files/`)
      .then((res) => {
        resolve(true)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = fileBackup
