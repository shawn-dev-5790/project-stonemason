const Language = require('./Language')

class LanguageFactory {
  constructor(nation) {
    this._data.nation = nation
  }

  _data = {
    id: 0,
    nation: 'KR',
    table: [],
  }

  increaseId() {
    this._data.id += 1
  }
  getId() {
    return this._data.id
  }
  getNation() {
    return this._data.nation
  }
  getTable() {
    return this._data.table
  }
  
  insertRow(key, value, desc = '') {
    this.increaseId()
    const row = new Language()
    row.create(this.getId(), this.getNation(), key, value, desc)
    this._data.table.push(row)
  }
}

module.exports = LanguageFactory
