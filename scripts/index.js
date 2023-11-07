const model = {
  protocol: 'http',
  domain: 'localhost:3000',
  path: 'sites/10000/site-analytics/inflow',
  query: 'from_date=&to_date=&keyword=123123&search_field=source&sortOrderByType=session_cnt&isSortDesc=true&page=1&page_size=10&totalPages=1&totalCount=1',
}

const url = `${model.protocol}://${model.domain}/${model.path}?${model.query}`

const url_obj = new URL(url)
const query_obj = Object.fromEntries(url_obj.searchParams)

const default_pagename = {
  from_date: '2023-01-02',
  to_date: '2032-10-10',
  keyword: 'keyword',
  search_field: 'source',
  sortOrderByType: 'session_cnt',
  isSortDesc: false,
  page: 12,
  page_size: 20,
  totalPages: 40,
  totalCount: 80,
}

const s = new Set()
s.add(default_pagename.from_date)

const corection = {
    ...default_pagename,
    ...query_obj
}

console.log(corection)
