import {
 request
} from './request'

let baseUrl = 'https://api.nmb.show/xiaojiejie1.phpp'

export function avatarData() {
 return request(baseUrl)
}