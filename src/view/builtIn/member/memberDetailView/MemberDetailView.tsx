import { useParams } from 'react-router-dom'

export default function MemberDetailView() {
  const { member_id } = useParams()
  return (
    <div>
      <h2>MemberDetailView</h2>
      <div>{member_id}</div>
    </div>
  )
}
