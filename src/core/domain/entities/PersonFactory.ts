import PersonEntity from './Person'

let factoryId = 0

export default class PersonFactory {
  public persons: Array<PersonEntity> = []

  public create(type: string) {
    if (type === 'MANAGER') {
      const init = { ...PersonEntity.init(), id: this.autoIncrementFactoryId() }
      const manager = new PersonEntity(init)
      manager.create()
      this.persons.push(manager)
    }
    if (type === 'USER') return
  }
  public createEach(type: string, count: number) {
    Array.from({ length: count }, () => this.create(type))
  }

  private autoIncrementFactoryId() {
    return ['PERSON', 'FACTORY', (factoryId += 1)].join('_')
  }
}
