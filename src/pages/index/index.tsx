import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtNavBar, AtAvatar, AtDivider } from 'taro-ui'
import './index.scss'

import { getTimeGap } from '../../utils'
import { connect } from 'react-redux'
import { updateMoments } from '../../actions/user'


 class Index extends Component {
  goAddPage () {
    Taro.navigateTo({
      url: '/pages/add/index'
    })
  }
  removeMoment (i) {
    const { moments, updateMoments } = this.props
    updateMoments(moments.filter((item, index) => index !== i))
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
  (dispatch) => ({
    updateMoments (data) {
      dispatch(updateMoments(data))
    }
  })
)(Index)