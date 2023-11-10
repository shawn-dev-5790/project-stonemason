import setting from '@/setting.json'

export default function sitemapTo() {
  return '/'
}

export const sitemapToMemberRegisterView = () => setting.sitemap.member_register
export const sitemapToMemberLoginView = () => setting.sitemap.member_login
export const sitemapToMemberForgetView = () => setting.sitemap.member_forget
