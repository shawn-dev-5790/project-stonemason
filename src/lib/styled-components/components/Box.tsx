import styled, { css } from 'styled-components'
import { removeCustomAttr } from '../utils/helpers'

export interface TAppFlexBox {
  flow?: string
  align?: string
  gap?: string
  w?: string
  h?: string
  pd?: string
  mg?: string
  b?: string
  br?: string
  bg?: string
}

export const AppFlexBox = styled.div.withConfig(removeCustomAttr())<TAppFlexBox>`
  display: flex;

  // flex
  ${({ flow = 'row', align = 'flex-start', gap = '0px' }) => {
    const [justifyContent = 'flex-start', alignItems = 'flex-start'] = align.split(' ')

    return css`
      flex-flow: ${flow};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      gap: ${gap};
    `
  }}

  // style
  ${({ w, h, pd, mg, b, br, bg }) => css`
    ${w && `width:${w};`}
    ${h && `height:${h};`}
    ${pd && `padding:${pd};`}
    ${mg && `margin:${mg};`}
    ${b && `border:${b};`}
    ${br && `border-radius:${br};`}
    ${bg && `background:${bg};`}
  `}
`

export const AppGridBox = styled.div``
