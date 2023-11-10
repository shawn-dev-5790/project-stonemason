export interface IDtrLogo {
  type: 'h1' | 'link' | 'img'
}
export default function DtrLogo({ type }: IDtrLogo): JSX.Element {
  if (type === 'h1') return <DtrLogoTypeH1 />
  if (type === 'link') return <DtrLogoTypeLink />
  if (type === 'img') return <DtrLogoTypeImage />
  return <></>
}
function DtrLogoTypeH1() {
  return (
    <div>
      <h1>DTR</h1>
    </div>
  )
}
function DtrLogoTypeLink() {
  return (
    <div>
      <a href='/'>DTR</a>
    </div>
  )
}
function DtrLogoTypeImage() {
  return (
    <div>
      <img src='#' alt='dtr-logo' />
    </div>
  )
}
