const fs = require('fs')
const _exec = require('./_exec')

const checkFolders = () => {
  return new Promise((resolve, reject) => {
    if (
      fs.existsSync('./backup') &&
      fs.existsSync('./backup/db') &&
      fs.existsSync('./backup/files')
    ) {
      resolve('folders already there')
    } else {
      _exec('mkdir -p ./backup/db/; mkdir -p ./backup/files/')
        .then((res) => {
          resolve('folders created')
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

module.exports = checkFolders
