export interface IAdsCustomTag extends JSX.Element {
  as?: 'div' | 'span' | 'p' // keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

// TODO: typescript suggestion issue
export default function AdsCustomTag({ as = 'div', ...rest }: IAdsCustomTag) {
  if (as === 'span') return <span {...rest} />
  if (as === 'div') return <div {...rest} />
  if (as === 'p') return <p {...rest} />
  return <></>
}
