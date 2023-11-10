import css from './DtrLayout.module.css'
import DtrLogo from './DtrLogo'

export interface IDtrLayout {
  type: 'T' | 'E' | 'H'
  children: React.ReactNode
}

export default function DtrLayout({ type, ...rest }: IDtrLayout): JSX.Element {
  if (type === 'T') return <DtrLayoutTypeT {...rest} />
  if (type === 'E') return <DtrLayoutTypeE {...rest} />
  return <></>
}

function DtrLayoutTypeT({ children }: Omit<IDtrLayout, 'type'>) {
  return (
    <div className={css.t_wrap}>
      <header>
        <DtrLogo type={'h1'} />
      </header>
      <main>{children}</main>
    </div>
  )
}
function DtrLayoutTypeE({ children }: Omit<IDtrLayout, 'type'>) {
  return <div>{children}</div>
}
