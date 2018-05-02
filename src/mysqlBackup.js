const fs = require('fs')
const { spawn } = require('child_process')
const config = require('./../.config')

const time = require('./time')

const mysqlBackup = () => {
  return new Promise((resolve, reject) => {
    const filename = `./backup/db/${time('date')}.sql`
    const wstream = fs.createWriteStream(filename)
    const child = spawn('mysqldump', config.mysql)
    child
      .stdout
      .pipe(wstream)
      .on('finish', () => {
        resolve(true)
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}

module.exports = mysqlBackup
