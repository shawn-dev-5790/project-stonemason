import styled, { css } from 'styled-components'
import StyleManager from '../StyleManager'

interface IAppFullPageLayout {
  pd?: string
  mg?: string
  b?: string
  br?: string
  bg?: string
}
export const AppFullPageLayout = styled.div.withConfig(StyleManager.removeCustomAttr())<IAppFullPageLayout>`
  display: block;
  width: 100vw;
  height: 100vh;

  // style
  ${({ pd, mg, b, br, bg }) => css`
    ${pd && `padding:${pd};`}
    ${mg && `margin:${mg};`}
    ${b && `border:${b};`}
    ${br && `border-radius:${br};`}
    ${bg && `background:${bg};`}
  `}
`
