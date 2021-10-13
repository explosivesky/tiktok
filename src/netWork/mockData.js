import {
 request
} from './request'
let baseUrl = 'https://www.fastmock.site/mock/9cd53795a0eb6e38aedca12fe4ebed10/dy'
export function mockData() {
 return request(
  baseUrl, {
   url: '/img'
  })
}