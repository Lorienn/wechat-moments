import Taro from '@tarojs/taro'
import { setUserInfo } from '../actions/user'

// 时间差格式化
export const getTimeGap = (prevTime) => {
  const ms = new Date().getTime() - prevTime.getTime()
  const ss = 1000
  const mi = ss * 60
  const hh = mi * 60
  const dd = hh * 24

  const day = ms / dd | 0
  const hour = (ms - day * dd) / hh | 0
  const minute = (ms - day * dd - hour * hh) / mi | 0

  if (day > 0) {
    return day + '天前'
  } else if (hour > 0) {
    return hour + '小时前'
  } else if (minute > 0) {
    return minute + '分钟前'
  } else {
    return '刚刚'
  }
}
// 检验用户是否初次登录
export const checkUserLogin = (dispatch) => {
  Taro.login({
    async success (res) {
      if (res.code) {
        const { code } = res
        const res2 = await Taro.request({
          url: `https://lorien.cn.utools.club/login?code=${code}`
        })
        const { openid } = res2.data
        Taro.getStorage({
          key: openid,
          success (res) {
            dispatch(setUserInfo(res.data))
          },
          fail (err) {
            Taro.redirectTo({
              url: `/pages/authorize/index?openid=${openid}`
            })
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}
// 检查session会话是否过期
export const checkSessionStatus = () => {
  Taro.checkSession({
    fail () {
      // session_key 已经失效，需要重新执行登录流程
      Taro.login()
    }
  })
}
// 获取URL参数
export const getURLParams = (url, key) => {
  const temp1 = url.split('?')
  const pram = temp1[1]
  const keyValue = pram.split('&')
  const obj = {}
  for (let i = 0; i < keyValue.length; i++){
      const item = keyValue[i].split('=')
      const key = item[0]
      const value = item[1]
      obj[key] = value
  }
  return obj[key]
}