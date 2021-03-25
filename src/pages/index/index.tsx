import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtNavBar, AtAvatar, AtDivider } from 'taro-ui'

import './index.scss'

export default class Index extends Component {
  static defaultProps = {
  }
  state = {
    moments: [
      {
        id: 0,
        nickName: '张小龙',
        avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F76257253.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619228946&t=b0c3e74fa33aadf43f2b83b1e569b5e9',
        content: '我们做出来的产品是为我们的用户服务的，不是为竞争对手服务的。我们要重视我们的用户，而不是竞争对手，总是花时间在研究竞争对手上而不是去了解用户，是做不出来好产品的，应该把更多的精力放在了解我们的用户上。',
        pushTime: new Date(1616636529786)
      }, {
        id: 1,
        nickName: '张小龙',
        avatarUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F76257253.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619228946&t=b0c3e74fa33aadf43f2b83b1e569b5e9',
        content: '对未来的真正慷慨，是把一切都献给现在。',
        pushTime: new Date(1616630000000)
      }
    ]
  }
  goAddPage () {
    Taro.navigateTo({
      url: '/pages/add/index'
    })
  }
  getTimeGap (prevTime) {
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
  removeMoment (i) {
    this.setState(prevState => {
      return {
        moments: prevState.moments.filter((item, index) => index !== i)
      }
    })
  }
  // componentWillMount () { }
  componentDidMount () {
    // wx.getSetting({
    //   success (res) {
    //     if (!res.authSetting['scope.userInfo']) {
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success () {
    //           wx.getUserInfo({
    //             success: res => {
    //               var userInfo = res.userInfo
    //               var nickName = userInfo.nickName
    //               var avatarUrl = userInfo.avatarUrl
    //               console.log(nickName, avatarUrl)
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
  }
  // componentWillUnmount () { }
  // componentDidShow () { }
  // componentDidHide () { }
  render () {
    const { moments } = this.state
    return (
      <View className='index'>
        {/* 顶部导航栏 */}
        <AtNavBar
          color='#000'
          title='朋友圈'
          leftIconType='chevron-left'
          rightFirstIconType='camera'
          onClickRgIconSt={this.goAddPage}
        />
        {/* 朋友圈背景+用户信息 */}
        <view className='index_bg'>
          <Text className='index_bg_name'>张小龙</Text>
          <AtAvatar size='large' image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F76257253.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619228946&t=b0c3e74fa33aadf43f2b83b1e569b5e9'></AtAvatar>
        </view>
        {/* 朋友圈区域 */}
        <view className='index_content'>
          {
            moments.map((item, i) => {
              return (
                <View>
                  <View className='index_content_piece' key={item.id}>
                    <View className='index_content_piece_l'>
                      <AtAvatar size='small' image={item.avatarUrl}></AtAvatar>
                    </View>
                    <View className='index_content_piece_r'>
                      <View className='index_content_piece_name'>{item.nickName}</View>
                      <View className='index_content_piece_detail'>{item.content}</View>
                      <Text className='index_content_piece_time'>{this.getTimeGap(item.pushTime)}</Text>
                      <Text className='index_content_piece_del' onClick={this.removeMoment.bind(this, i)}>删除</Text>
                    </View>
                  </View>
                  <AtDivider height='60' lineColor='#eee' />
                </View>
              )
            })
          }
        </view>
      </View>
    )
  }
}
