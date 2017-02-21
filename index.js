function iterativeLog(array) {
  array.forEach(function(ele, idx, arr) {
    console.log(idx + ": " + ele)

  })
}

function iterate(callback) {
  var array = [1, 2, 3, 4]

  array.forEach(callback)

  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
