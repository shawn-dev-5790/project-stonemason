



export class LanguageManager {
  test() {}
  save() {}
  load() {}
  import() {}
  export(type: 'JSON' | 'JS' | 'GOOGLE_SPREAD_SHEET' | 'REPORT' | 'DOCS' | 'SPEC') {
    if (type === 'JSON') return LanguageFile.parseToJSON()
    if (type === 'JS') return LanguageFile.parseToJS()
    if (type === 'GOOGLE_SPREAD_SHEET') return LanguageFile.parseToGoogleSpreadSheet()
    if (type === 'REPORT') return LanguageFile.parseToReport()
    if (type === 'DOCS') return LanguageFile.parseToDocs()
    if (type === 'SPEC') return LanguageFile.parseToSpec()
  }
}

export class LanguageFile {
  public static parseToJSON() {}
  public static parseToJS() {}
  public static parseToGoogleSpreadSheet() {}
  public static parseToReport() {}
  public static parseToSpec() {}
  public static parseToDocs() {}
}
