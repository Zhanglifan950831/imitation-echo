import axios from 'axios'

/**
 * GET请求封装
 * @param requestUrl  请求地址
 * @param param 参数数据
 * @returns {AxiosPromise<any>}
 * @constructor
 */
let GET = (requestUrl, param) => {
  return new Promise(resolve => {
    axios.get(requestUrl, {
      params: param
    }).then(info => {
      resolve(info.data);
    });
  });
};

export default {
  GET: GET
}
