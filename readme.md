# database-and-server-backup

[![npm](https://img.shields.io/npm/v/database-and-server-backup.svg?style=flat-square)](https://www.npmjs.com/package/database-and-server-backup)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ozgrozer/database-and-server-backup/blob/master/license)

Backup database and server.

## Usage

Make sure you can login to SSH without password.

[SSH login without password](http://www.linuxproblem.org/art_9.html)

Install library to your project with yarn or npm.

```sh
yarn add database-and-server-backup
npm i database-and-server-backup
```

Import library to your JS file.

```js
const backup = require('database-and-server-backup')
```

Create a config object.

```js
const config = {
  mysql: ['-u', 'yourUsername', '--password=yourPassword', '-h', 'yourIp', 'yourDatabaseName'],
  server: 'yourUsername@yourIp:/your/folder',
  backupFolder: '/home/user/full/path'
}
```

Pass config object to the backup function.

```js
backup(config)
  .then(() => {
    // done
  })
  .catch((err) => {
    console.log(err)
  })
```

Run the script.

```sh
node file.js
```

## License

[MIT](https://github.com/ozgrozer/database-and-server-backup/blob/master/license)
