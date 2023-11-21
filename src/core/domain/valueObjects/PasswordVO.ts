export default class PasswordVO {
  constructor(public value: string = '') {}

  public static get MIN_PASSWORD(): number {
    return 8
  }

  public verify(): boolean {
    return this.value.length > PasswordVO.MIN_PASSWORD
  }
}
