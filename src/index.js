const checkFolders = require('./checkFolders')
const mysqlBackup = require('./mysqlBackup')
const fileBackup = require('./fileBackup')

checkFolders()
  .then(() => {
    const backup = async () => {
      await mysqlBackup()
      await fileBackup()
      console.log('done')
    }

    backup()
  })
