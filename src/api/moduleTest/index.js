/**
 * moduleTest模块接口列表
 */
import axios from '@/lib/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

export default {
  name: 'moduleTest',
  // 新闻列表
  getText (data) {
    return axios.get('https://api.oick.cn/dog/api.php/topics', { params: data })
  },
  // post提交
  weatherApi (data) {
    return axios.post('https://api.apiopen.top/getImages', qs.stringify(data))
  }
}
