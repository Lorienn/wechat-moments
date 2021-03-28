// reducers存放初始状态，并定义改变状态的action类型
const INITIAL_STATE = {
  moments: [
    {
      nickName: '张小龙',
      avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz%2FFtnt4m7Mlgjdn8Atv0nLXjlv9wibGDQ9U4RxT1kqoFN6xIoxncjkdktECMRs5NYD0cURWxKicGBqy7E6OEe0jaicg%2F0&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619425764&t=e6d0daa65cc7b42762b4f6f478242d95',
      content: '我们做出来的产品是为我们的用户服务的，不是为竞争对手服务的。我们要重视我们的用户，而不是竞争对手，总是花时间在研究竞争对手上而不是去了解用户，是做不出来好产品的，应该把更多的精力放在了解我们的用户上。',
      pushTime: new Date(1616636529786)
    }, 
    {
      nickName: '马化腾',
      avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.quanminbaike.cn%2Fuploads%2F201805%2F15272809707igGyJnX.jpg&refer=http%3A%2F%2Fwww.quanminbaike.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619425802&t=5d85c0b5fa984ea1a6ee173252184fb3',
      content: '对未来的真正慷慨，是把一切都献给现在。',
      pushTime: new Date(1616630000000)
    }
  ],
  userInfo: null
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'setUserInfo':
      const { userInfo } = action.payload
      return {
        ...state,
        userInfo
      }
    case 'updateMoments':
      const { moments } = action.payload
      return {
        ...state,
        moments
      }
    default:
      return state
  }
}