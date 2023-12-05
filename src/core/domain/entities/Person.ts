export interface IPersonEntity {
  id: string
  name: string
  status?: 'idle' | 'created' | 'updated' | 'deleted'
  created_at?: string
  updated_at?: string
  deleted_at?: string
}
export default class PersonEntity {
  constructor(private _data: IPersonEntity) {}

  public static init(): IPersonEntity {
    return {
      id: '',
      name: '',
      status: 'idle',
      created_at: '',
      updated_at: '',
      deleted_at: '',
    }
  }
  public static reset(): IPersonEntity {
    return new PersonEntity(PersonEntity.init()).toObject()
  }
  public toObject(): IPersonEntity {
    return JSON.parse(JSON.stringify(this._data))
  }

  public get id() {
    return this._data.id
  }
  public get name() {
    return this._data.name
  }
  public get createdAt() {
    return this._data.created_at
  }
  public get updatedAt() {
    return this._data.updated_at
  }
  public get deletedAt() {
    return this._data.deleted_at
  }

  // checkers
  public canCreate(): boolean {
    if (!this.id) return false
    return true
  }
  public canUpdate() {
    return true
  }
  public canDelete() {
    return true
  }
  public canUpdateName() {
    return true
  }

  public create(): void {
    if (!this.canCreate()) return
    const date = new Date().toDateString()
    this._data.status = 'created'
    this._data.created_at = date
    this._data.updated_at = date
  }
  public update(): void {
    if (!this.canUpdate()) return
    const date = new Date().toDateString()
    this._data.status = 'updated'
    this._data.updated_at = date
  }

  public delete(): void {
    if (!this.canDelete()) return
    const date = new Date().toDateString()
    this._data.status = 'deleted'
    this._data.updated_at = date
    this._data.deleted_at = date
  }
  public updateName(name: IPersonEntity['name']) {
    if (!this.canUpdateName()) return
    this.update()
    this._data.name = name
  }
}
