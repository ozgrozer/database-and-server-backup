const checkFolders = require('./checkFolders')
const mysqlBackup = require('./mysqlBackup')
const fileBackup = require('./fileBackup')

module.exports = (config) => {
  return new Promise((resolve, reject) => {
    checkFolders(config)
      .then(mysqlBackup)
      .then(fileBackup)
      .then((res) => {
        resolve(true)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
