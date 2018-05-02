const time = (mode) => {
  const today = new Date()
  const getDate = today.getDate().toString()
  const getMonth = (today.getMonth() + 1).toString()
  const getFullYear = today.getFullYear()
  const date = getDate.length === 1 ? '0' + getDate : getDate
  const month = getMonth.length === 1 ? '0' + getMonth : getMonth

  const getHours = today.getHours().toString()
  const getMinutes = today.getMinutes().toString()
  const getSeconds = today.getSeconds().toString()
  const hours = getHours.length === 1 ? '0' + getHours : getHours
  const minutes = getMinutes.length === 1 ? '0' + getMinutes : getMinutes
  const seconds = getSeconds.length === 1 ? '0' + getSeconds : getSeconds

  let result
  if (mode === 'date') {
    result = date + '.' + month + '.' + getFullYear
  } else if (mode === 'time') {
    result = hours + ':' + minutes + ':' + seconds
  } else if (mode === 'full') {
    result = date + '.' + month + '.' + getFullYear + ' - ' + hours + ':' + minutes + ':' + seconds
  }
  return result
}

module.exports = time
