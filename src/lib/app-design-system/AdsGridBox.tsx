import css from './AdsGridBox.module.css'

export default function AdsGridBox() {
  return <></>
}
export interface IAdsGridBoxType1 {
  title: React.ReactNode
  info: React.ReactNode
  sectionMain: React.ReactNode
  sectionSub: React.ReactNode
}
export function AdsGridBoxType1(props: IAdsGridBoxType1) {
  return (
    <div className={css.wrap_type_1}>
      <div>{props.title}</div>
      <div>{props.info}</div>
      <section>{props.sectionMain}</section>
      <section>{props.sectionSub}</section>
    </div>
  )
}
