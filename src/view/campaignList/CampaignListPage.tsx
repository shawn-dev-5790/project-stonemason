import { RockIcon16, RockImg, RockImgFrame } from '@/lib/styled-components/components/Dummy'
import * as UI from './CampaignListPage.styled'

export default function CampaignListPage() {
  const data = Array.from({ length: 20 }, (_, i) => {
    return {
      id: i,
      name: '[재방문 유도] 회원가입 감사쿠폰 발급 알림톡으로 알리기',
      status: i % 2 === 0 ? 'ON' : 'OFF',
      stat: {
        sent_cnt: '15,000',
        roas: '23,000.00%',
        conversion_rate: '6.67%',
      },
      components: {
        audience: 'audience',
        channel: 'channel',
        template: 'template',
        report: 'report',
        schedule: 'schedule',
      },
    }
  })

  console.log(data)

  return (
    <UI.Layout>
      <UI.Nav>
        <UI.NavHead>
          <RockImg>LOGO</RockImg>
        </UI.NavHead>
      </UI.Nav>
      <UI.Page>
        <UI.PageHead>
          <RockImg>Rock</RockImg>
          <h2>캠페인 목록 페이지</h2>
        </UI.PageHead>
        <UI.PageCont>
          <UI.CampaignInfo>
            <p>휴대폰 번호가 있는 고객에게 카카오톡으로 정보성 메시지를 발송해 구매전환율을 높이는 캠페인입니다.</p>
            <small style={{ color: 'gray' }}>
              리포트를 보고 오디언스에게 어떤채널로 어떤 탬플릿을 언제 보낼것인가?
            </small>
          </UI.CampaignInfo>
          <UI.CampaignList>
            {data.map((c) => (
              <UI.CampaignListItem key={c.id}>
                <UI.CampaignListItemHead>
                  <UI.StatusBadge>{c.status}</UI.StatusBadge>
                  <UI.ItemName>{c.name}</UI.ItemName>
                </UI.CampaignListItemHead>
                <UI.CampaignListItemCont>
                  <UI.ItemStats>
                    <dl>
                      <dt>
                        <RockIcon16>S</RockIcon16>
                        <span>발송수</span>
                      </dt>
                      <dd>{c.stat.sent_cnt}</dd>
                    </dl>
                    <dl>
                      <dt>
                        <RockIcon16>R</RockIcon16>
                        <span>ROAS</span>
                      </dt>
                      <dd>{c.stat.roas}</dd>
                    </dl>
                    <dl>
                      <dt>
                        <RockIcon16>C</RockIcon16>
                        <span>구매전환율</span>
                      </dt>
                      <dd>{c.stat.conversion_rate}</dd>
                    </dl>
                  </UI.ItemStats>
                  <UI.ItemComponent>
                    <RockImgFrame>
                      <RockImg>{c.components.report}</RockImg>
                    </RockImgFrame>
                    <RockImgFrame>
                      <RockImg>{c.components.audience}</RockImg>
                    </RockImgFrame>
                    <RockImgFrame>
                      <RockImg>{c.components.channel}</RockImg>
                    </RockImgFrame>
                    <RockImgFrame>
                      <RockImg>{c.components.template}</RockImg>
                    </RockImgFrame>
                    <RockImgFrame>
                      <RockImg>{c.components.schedule}</RockImg>
                    </RockImgFrame>
                    <RockImgFrame></RockImgFrame>
                  </UI.ItemComponent>
                </UI.CampaignListItemCont>
                <UI.ItemMenu>
                  <RockIcon16>P</RockIcon16>
                  <RockIcon16>E</RockIcon16>
                </UI.ItemMenu>
              </UI.CampaignListItem>
            ))}
          </UI.CampaignList>
        </UI.PageCont>
      </UI.Page>
    </UI.Layout>
  )
}
