const path = require('path')

const filePath = 'C:/Redsis/Redsis.exe'
const filePath2 = 'Redsis/Redsis.exe'

// basename
console.log('basename: ' + path.basename(filePath, '.exe'))

// dirname
console.log('dirname: ' + path.dirname(filePath))

// extname
console.log('extname: ' + path.extname(filePath))

// join
const array = ['/foo', 'bar', 'baz/asdf', 'quux', '..']
console.log('join: ' + path.join(...array))

// normalize
console.log(path.normalize('/foo/bar///baz/asdf/quux/..'))

// isAbsolute
console.log(path.isAbsolute(filePath))
console.log(path.isAbsolute(filePath2))

// parse
const parsedFilePath = path.parse(filePath)
console.log(`
    root: ${parsedFilePath.root},
    dir: ${parsedFilePath.dir},
    base: ${parsedFilePath.base},
    name: ${parsedFilePath.name},
    ext: ${parsedFilePath.ext}
    `)

// relative
console.log(path.relative(filePath, filePath2))

// resolve
console.log(path.resolve('C:/Redsis/Redsis.exe', 'Redsis/Redsis.exe'))