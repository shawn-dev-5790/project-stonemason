const { join } = require('path')
const { readFileSync, readdirSync, writeFileSync } = require('fs')

function format() {
  const dir = join(__dirname, '..', 'src', 'lib', 'intl', 'languages')
  const filenames = readdirSync(dir)

  filenames.forEach((filename) => {
    const filePath = join(dir, filename)
    const fileData = readFileSync(filePath, 'utf-8')

    const willWriteFileData = Object.fromEntries(
      Object.entries(JSON.parse(fileData)).sort((a, b) => a[0].localeCompare(b[0]))
    )
    console.info(willWriteFileData)

    writeFileSync(filePath, JSON.stringify(willWriteFileData, null, 2))
  })
}

format()
