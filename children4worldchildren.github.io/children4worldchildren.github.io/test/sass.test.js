const path = require('path')
const glob = require('glob')
const sassTrue = require('sass-true')

describe('Sass', () => {
    const sassTestFiles = glob.sync(path.resolve(__dirname, '*.scss'))
    sassTestFiles.forEach(file => sassTrue.runSass({ describe, it }, file))
})
