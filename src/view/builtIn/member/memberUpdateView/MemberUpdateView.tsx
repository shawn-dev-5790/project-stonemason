import { useParams } from 'react-router-dom'

export default function MemberUpdateView() {
  const { member_id } = useParams()

  return (
    <div>
      <h2>MemberUpdateView</h2>
      <div>{member_id}</div>
    </div>
  )
}
