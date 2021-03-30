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
          <Text className='index_bg_name'>{(userInfo && userInfo.nickName) || '游客'}</Text>
          <AtAvatar size='large' image={(userInfo && userInfo.avatarUrl) || 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619679568&t=9ff3b78f84f2171e2dd56d7f1d11dd10'}></AtAvatar>
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