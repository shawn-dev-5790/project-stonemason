const LanguageFactory = require('./LanguageFactory')
const LanguageFile = require('./LanguageFile')
const LanguageKey = require('./LanguageKey')

const table_kr = new LanguageFactory('KR')

table_kr.insertRow(LanguageKey.create().domain('common').role('dialog').type('txt').name('ok').toString(), '확인', 'desc')
table_kr.insertRow(LanguageKey.create().domain('common').role('dialog').type('txt').name('cancel').toString(), '취소')


table_kr.getTable()

LanguageFile.createLanguagePack(table_kr.getTable())
LanguageFile.createLanguageTable(table_kr.getTable())
