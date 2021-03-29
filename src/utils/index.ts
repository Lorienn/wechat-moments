import Taro from '@tarojs/taro'

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

export const userLogin = () => {
  Taro.checkSession({
    success () {
      //session_key 未过期，并且在本生命周期一直有效，进入index页面
    },
    fail () {
      // session_key 已经失效，需要重新执行登录流程，进入授权页面？
      Taro.login({
        async success (res) {
          if (res.code) {
            //发起网络请求
            const { code } = res
            // ！！！app_secret很重要，commit前务必删除
            // todo: 搭建express服务器，以调用code2Session的API，能保存moments和userinfo更好
            // 为了 access_token 的安全性，后端 API 不能直接在小程序内通过 wx.request 调用
            // 通过 wx.login 接口获得临时登录凭证 code 后传到开发者服务器调用此接口获取用户openid和session_key
            const res2 = await Taro.request({
              url: `/getInfo`
            })
            console.log(res2)
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }
  })
}