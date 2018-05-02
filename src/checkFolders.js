const fs = require('fs')
const path = require('path')
const _exec = require('./_exec')

const checkFolders = (config) => {
  return new Promise((resolve, reject) => {
    if (
      fs.existsSync(config.backupFolder) &&
      fs.existsSync(path.join(config.backupFolder, 'db')) &&
      fs.existsSync(path.join(config.backupFolder, 'files'))
    ) {
      resolve(config)
    } else {
      _exec(`mkdir -p ${path.join(config.backupFolder, 'db')}; mkdir -p ${path.join(config.backupFolder, 'files')}`)
        .then(() => {
          resolve(config)
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

module.exports = checkFolders
