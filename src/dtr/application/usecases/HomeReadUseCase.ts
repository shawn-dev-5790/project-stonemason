import { Nullable } from '@/dtr/utils/types'

export interface IHomeReadUseCase {
  api: {
    user: Nullable<{
      code: string
      message: string
      data: { user: { name: string } }
    }>
  }
  state: {
    count: number
    is_anything_change: boolean
  }
}

export default class HomeReadUseCase {
  constructor(private _data: IHomeReadUseCase) {}
  /**
   * =======================================================
   * initialize & reset & toObject
   * - state 관리를 위한 methods
   * - class 생성전, 활용 가능하도록 static method 형태로 제공
   * - useEffect의 clean-up 함수에서 사용
   * =======================================================
   */
  public static init() {
    const initialState = {
      api: { user: null },
      state: {
        count: 0,
        is_anything_change: false,
      },
    }
    return initialState
  }
  public reset() {
    this._data = HomeReadUseCase.init()
    return this.toObject()
  }
  public toObject() {
    return JSON.parse(JSON.stringify(this._data))
  }
  /**
   * =======================================================
   * setters
   * - 화면 랜더링에 필요한 변수, 자료구조 등을 작성
   * - api는 최대한 읽기전용 상태로 사용하고, 이 값들은 수정하지 마세요!
   * - 수정이나, 계산식이 필요하다면, state 나 values 파트를 이용하세요.
   * =======================================================
   */
  public set user(user: IHomeReadUseCase['api']['user']) {
    this._data.api.user = user
  }
  /**
   * =======================================================
   * getters
   * - 화면 랜더링에 필요한 변수, 자료구조 등을 작성
   * =======================================================
   */
  public get user() {
    return this._data.api.user
  }
  public get state() {
    return this._data.state
  }
  /**
   * =======================================================
   * policy constants
   * - 정책상 필요한 상수
   * =======================================================
   */
  /**
   * =======================================================
   * values
   * - 화면 랜더링에 필요한 변수, 자료구조 등을 작성
   * =======================================================
   */
  public getCount() {
    return this._data.state.count
  }
  /**
   * =======================================================
   * features : prefix on{feature_name}
   * - 페이지에서 제공하는 모든 기능들을 작성
   * - 사용자의 의도가 최대한 드러나도록 method name을 작성
   * =======================================================
   */
  public onUpdateCount(count: number) {
    this._data.state.count = count
    this._data.state.is_anything_change = true
  }
}
