import PersonFactory from '@/core/domain/entities/PersonFactory'

export function Test() {
  const factory = new PersonFactory()
  factory.createEach('MANAGER', 100)
  console.log(factory.persons)
  return <></>
}
