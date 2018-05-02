const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const time = require('./time')

const mysqlBackup = (config) => {
  return new Promise((resolve, reject) => {
    const filename = `${path.join(config.backupFolder, 'db')}/${time('full')}.sql`
    const wstream = fs.createWriteStream(filename)
    const child = spawn('mysqldump', config.mysql)
    child
      .stdout
      .pipe(wstream)
      .on('finish', () => {
        resolve(config)
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}

module.exports = mysqlBackup
