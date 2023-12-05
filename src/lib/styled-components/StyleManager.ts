import { DefaultTheme, createGlobalStyle } from 'styled-components'

export default class StyleManager {
  public static get GlobalStyle(): ReturnType<typeof createGlobalStyle> {
    return AppGlobalStyle
  }
  public static get light(): DefaultTheme {
    return {}
  }
  public static get dark(): DefaultTheme {
    return {}
  }
  public static get customAttrs(): Array<string> {
    return [
      'w', // width
      'h', // height
      'flex', // flex-flow
      'align', // justify-content align-items
      'gap', // gap
      'pd', // padding
      'mg', // margin
      'b', // border
      'br', // border-radius
      'bg', // background
    ]
  }
  public static removeCustomAttr(attrs: Array<string> = StyleManager.customAttrs) {
    return { shouldForwardProp: (prop: string) => !attrs.includes(prop) }
  }
}

const AppGlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://use.typekit.net/af/180254/00000000000000000001522c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format('woff2');
  unicode-range:U+0021-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0030-0039;
}

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://use.typekit.net/af/a18530/00000000000000000001522e/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3) format('woff2');
  unicode-range:U+0021-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0030-0039;
}

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://use.typekit.net/af/220823/000000000000000000015231/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format('woff2');
  unicode-range:U+0021-002F, U+003A-0040, U+005B-0060, U+007B-007E , U+0030-0039;
}

html,body,#root{min-height:100%;}
body{position:relative;width:100%;background-color:#e8e8e8;direction:ltr;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{margin:0;padding:0;}
body,th,td,input,select,textarea,button{font-size:14px;line-height:1.5;font-family:'Noto Sans KR';
fieldset,img{border:0 none;}
dl,ul,ol,menu,li{list-style:none;}
blockquote,q{quotes:none;}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}
input,select,textarea,button{border-radius:0;vertical-align:middle;}
button{border:0 none;background-color:transparent;cursor:pointer;}
button:disabled{cursor:not-allowed;}
color:#262626;letter-spacing:-0.01em}
a{color:#3359ff;text-decoration:none;}
address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal;}
/* global */
.ir_pm{display:block;overflow:hidden;font-size:1px;line-height:0;text-indent:-9999px;}
.ir_wa{display:block;overflow:hidden;position:relative;width:100%;height:100%;z-index:-1;}
.screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px;}
*{box-sizing:border-box;color:inherit;}
/* temp */
div,span,b,p,dl,dt,dd,small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
`
