// reducers存放初始状态，并定义改变状态的action类型
const INITIAL_STATE = {
  moments: [
    {
      nickName: 'Steve Jobs',
      avatarUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=144697261,1414303917&fm=26&gp=0.jpg',
      content: `We're here to put a dent in the universe. Otherwise why else even be here?`,
      pushTime: new Date(1616925742130)
    },
    {
      nickName: '张小龙',
      avatarUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1911725711,1690861816&fm=26&gp=0.jpg',
      content: '我们做出来的产品是为我们的用户服务的，不是为竞争对手服务的。我们要重视我们的用户，而不是竞争对手，总是花时间在研究竞争对手上而不是去了解用户，是做不出来好产品的，应该把更多的精力放在了解我们的用户上。',
      pushTime: new Date(1616636529786)
    }, 
    {
      nickName: 'Bill Gates',
      avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171205%2F71fe17f91383485584d3bc8a310ae239.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619517684&t=e6765f2b7c90dc44850ea38ea0cb54ef',
      content: 'Good habits are mainly relies on the self-discipline of people, or by the people to see the self negation.',
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