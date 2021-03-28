import { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { AtNavBar, AtAvatar, AtDivider } from 'taro-ui'
import './index.scss'

import { getTimeGap } from '../../utils'

 class Index extends Component {
  goAddPage () {
    Taro.navigateTo({
      url: '/pages/add/index'
    })
  }
  removeMoment (i) {
    // this.setState(() => {
    //   return {
    //     moments: this.state.moments.filter((item, index) => index !== i)
    //   }
    // })
  }
  // componentWillMount () { }
  // componentDidMount () { }
  // componentWillUnmount () { }
  // componentDidShow () { }
  // componentDidHide () { }
  render () {
    const { userInfo, moments } = this.props
    return (
      <View className='index'>
        {/* todo: 顶部显示今日天气 */}
        {/* 顶部导航栏 */}
        <AtNavBar
          color='#000'
          title='朋友圈'
          leftIconType='chevron-left'
          rightFirstIconType='camera'
          fixed
          onClickRgIconSt={this.goAddPage}
        />
        {/* 朋友圈背景+用户信息 */}
        {/* todo: 点击更换朋友圈背景 */}
        <View className='index_bg'>
          <Text className='index_bg_name'>{userInfo.nickName}</Text>
          <AtAvatar size='large' image={userInfo.avatarUrl}></AtAvatar>
        </View>
        {/* 朋友圈区域 */}
        <View className='index_content'>
          {
            moments.map((item, i) => {
              return (
                <View key={i}>
                  <View className='index_content_piece'>
                    <View className='index_content_piece_l'>
                      <AtAvatar size='small' image={item.avatarUrl}></AtAvatar>
                    </View>
                    <View className='index_content_piece_r'>
                      <View className='index_content_piece_name'>{item.nickName}</View>
                      <View className='index_content_piece_detail'>{item.content}</View>
                      <Text className='index_content_piece_time'>{getTimeGap(item.pushTime)}</Text>
                      {/* todo: 点击删除之后 */}
                      <Text className='index_content_piece_del' onClick={this.removeMoment.bind(this, i)}>删除</Text>
                    </View>
                  </View>
                  <AtDivider height='60' lineColor='#eee' />
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default connect(
  ({user}) => ({
    moments: user.moments,
    userInfo: user.userInfo
  }),
  null
)(Index)