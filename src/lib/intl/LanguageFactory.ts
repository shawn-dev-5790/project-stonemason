import LanguageEntity from './LanguageEntity'

class LanguagePackFactory {
  entities: any[] = []

  create(key: string, value: string, desc: string) {
    this.entities.push(
      new LanguageEntity({
        key,
        value,
        desc,
        nation: 'KR',
        id: (this.entities.length + 1).toString(),
        created_at: Date.now().toString(),
        updated_at: Date.now().toString(),
      })
    )
  }
  update() {}
  validate() {}
  toJSON() {}
}

const languagePackFactory = new LanguagePackFactory()

export default languagePackFactory
