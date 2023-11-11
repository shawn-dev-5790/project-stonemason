import css from './AdsLayout.module.css'

export default function AbsLayout() {
  return <></>
}
export interface IAdsLayoutFullCenter {
  children: React.ReactNode
}
export function AdsLayoutFullCenter(props: IAdsLayoutFullCenter) {
  return <main className={css.wrap_type_full_center}>{props.children}</main>
}
