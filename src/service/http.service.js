import axios from 'axios'

/**
 * GET请求封装
 * @param requestUrl  请求地址
 * @param param 参数数据
 * @returns {AxiosPromise<any>}
 * @constructor
 */
let GET = (requestUrl, param) => {
  return axios.get(requestUrl, {
    params: param
  })
}

export default {
  GET: GET
}
