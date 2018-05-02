# database-and-server-backup

Backup database and server.

## Usage

Clone repository.

```sh
git clone https://github.com/ozgrozer/database-and-server-backup.git
```

Change directory.

```sh
cd database-and-server-backup
```

Create a config file.

```sh
vim .config.js
```

Like this.

```js
module.exports = {
  mysql: ['-u', 'yourUsername', '--password=yourPassword', '-h', 'yourIp', 'yourDatabaseName'],
  server: 'yourUsername@yourIp:/your/folder'
}
```

Make sure you can login to SSH without password.

[SSH login without password](http://www.linuxproblem.org/art_9.html)

Run the script with yarn or npm.

```sh
yarn start
npm start
```

Backups go `/backup` folder.
