export type NullablePartial<T> = { [K in keyof T]?: T[K] | null }
export type Nullable<T> = T | null
export type Modify<T, R> = Omit<T, keyof R> & R
export type ValueOf<T> = T[keyof T]
export type ReplaceType<T, U> = { [K in keyof T]: U }
