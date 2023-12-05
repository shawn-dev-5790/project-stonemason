import styled from 'styled-components'

// page-layout
export const Layout = styled.main`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-left: 60px;
  padding-top: 60px;
`
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 800;
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-shrink: 0;
  gap: 16px;
  width: 60px;
  height: 100%;
  background-color: #444;
`
export const NavHead = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #222;
`
export const Page = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`
export const PageHead = styled.div`
  position: absolute;
  top: 0;
  left: 60px;
  right: 0;
  z-index: 800;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 60px;
  padding: 8px 32px;
  border: 1px solid #e8e8e8;
  background-color: #fff;
`
export const PageCont = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
export const CampaignInfo = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 24px 32px;
  background-color: #fff;
`
export const CampaignList = styled.ul`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 8px 32px 64px;
  gap: 8px;
`
export const CampaignListItem = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  gap: 4px;
  padding: 8px 32px 8px 8px;
  background-color: #fff;
  border-left: 4px solid #444;
`
export const CampaignListItemHead = styled.div`
  display: flex;
  flex-flow: row;
  gap: 16px;
`
export const CampaignListItemCont = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 60px;
  padding-left: 64px;
`

// components
export const StatusBadge = styled.b`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 48px;
  height: 24px;
  padding: 8px;
  background-color: gold;
`
export const ItemName = styled.b`
  font-size: 18px;
`
export const ItemMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 24px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  background-color: #444;
`
export const ItemStats = styled.div`
  display: flex;
  width: 480px;
  dl {
    display: flex;
    flex-flow: column;
    gap: 4px;
    width: 25%;
    padding: 0 12px;
    border-left: 1px solid #6b6b6b;
  }
  dt {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  dd {
    font-size: 16px;
  }
`
export const ItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  & > * {
    position: relative;
    & + *::before {
      content: '';
      position: absolute;
      top: calc(50% - 6px);
      left: -4px;
      width: 14px;
      height: 12px;
      margin-left: -8px;
      background-color: #444;
    }
  }
`
