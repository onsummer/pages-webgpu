const empty = require('empty-folder')

empty('../docs', false, (o) => {
  if (o.error) {
    console.log(o.error)
  }
})