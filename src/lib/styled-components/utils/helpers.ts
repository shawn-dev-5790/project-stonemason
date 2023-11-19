const CUSTOM_ATTRS = [
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

export const removeCustomAttr = (attrs: string[] = CUSTOM_ATTRS) => {
  return {
    shouldForwardProp: (prop: string) => !attrs.includes(prop),
  }
}
