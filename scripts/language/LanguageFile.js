const path = require('path')
const fse = require('fs-extra')

//'JSON' | 'JS' | 'GOOGLE_SPREAD_SHEET' | 'REPORT' | 'DOCS' | 'SPEC'

class LanguageFile {
  static createFilePath(name) {
    return path.join(__dirname, '_out', name)
  }
  // for local file
  static createLanguagePack(table, name = '') {
    let nation = ''
    const data = table.map((row) => {
      nation = row.getNation()
      return row._data
    })
    fse.writeFileSync(LanguageFile.createFilePath(`${name}lang_pack_${nation.toLowerCase()}.json`), JSON.stringify(data, null, 2))
  }
  // for google-spread-sheet
  static createLanguageTable(table, name = '') {
    let nation = ''
    const data = table.reduce((gsheet, row) => {
      nation = row.getNation()
      const domain = row.getDomain()
      const subKey = row.getKey().split('.').slice(1).join('.')
      if (!gsheet[domain]) {
        gsheet[domain] = {}
      }
      gsheet[domain][subKey] = row.getValue()

      return gsheet
    }, {})
    fse.writeFileSync(LanguageFile.createFilePath(`${name}lang_gsheet_${nation.toLowerCase()}.json`), JSON.stringify(data, null, 2))
  }
}

module.exports = LanguageFile
