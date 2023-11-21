import { EMAIL_REGEX } from '@/core/utils/regex'

export default class EmailVO {
  constructor(public value: string = '') {}

  public verify(): boolean {
    return EMAIL_REGEX.test(this.value)
  }
}
