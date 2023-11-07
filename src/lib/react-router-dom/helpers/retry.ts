import { ComponentType } from 'react'

export function retry(func: any, count: number = 3, interval: number = 1000): Promise<{ default: ComponentType<any> }> {
  const onError = (reject: any) => (err: any) => {
    // timer 대기
    const timer = setTimeout(() => {
      // retry count 1회씩 가감하면서 다음 실행
      count > 1 ? retry(func, count - 1, interval) : reject(err)
      // timer 메모리에서 제거
      clearTimeout(timer)
    }, interval)
  }

  return new Promise((resolve, reject) => func().then(resolve).catch(onError(reject)))
}
