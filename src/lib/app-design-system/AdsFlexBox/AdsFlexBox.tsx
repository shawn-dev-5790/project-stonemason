type TFlexBoxAlign = 'center' | 'flex-start' | 'flex-end'

interface IAdsFlexBoxStyle {
  display?: string
  align: [TFlexBoxAlign, TFlexBoxAlign]
  gap?: number
  width?: string
  height?: string
  pd?: string
  mg?: string
}

interface IAdsFlexBox {
  _style?: IAdsFlexBoxStyle
  children: React.ReactNode
}

// TODO: 이런건 스타일드 컴포넌트 쓰자 그냥'
export default function AdsFlexBox({
  _style = { align: ['center', 'center'] },
  ...rest
}: IAdsFlexBox) {
  const style = new Map()
  style.set('display', 'flex')
  style.set('justifyContent', _style.align[0] || 'center')
  style.set('alignItems', _style.align[1] || 'center')
  if (_style.gap) style.set('gap', _style.gap || 0)
  if (_style.width) style.set('width', _style.width)
  if (_style.height) style.set('height', _style.height)
  if (_style.pd) style.set('padding', _style.pd)
  if (_style.mg) style.set('margin', _style.mg)

  const a = Object.fromEntries(style)
  console.log(a)

  return <div {...rest} style={a} />
}
