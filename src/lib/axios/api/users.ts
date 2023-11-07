import { reqGetUserUrl, IReqGetUser } from '@/core/adaptor/endpoints/getUser'
import makeRequest from '../makeRequest'

export async function getUserById(user_id: IReqGetUser['path']['user_id']) {
  return makeRequest({ url: reqGetUserUrl.replace(':user_id', user_id) }).then((res) => res.data)
}
