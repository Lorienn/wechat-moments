import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

import { connect } from 'react-redux'
import { setUserInfo } from '../../actions/user'

class Index extends Component {
  goIndexPage () {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  handleClick (e) {
    const { setUserInfo } = this.props
    setUserInfo(e.detail.userInfo)
    this.goIndexPage()
  }
  // componentWillMount () { }
  // componentDidMount () { }
  // componentWillUnmount () { }
  // componentDidShow () { }
  // componentDidHide () { }
  render () {
    return (
      <View className='author'>
        <View className='author_tip'>需要您的授权才能使用哦！</View>
        <Button className='author_btn' type='warn' open-type="getUserInfo" onGetUserInfo={this.handleClick.bind(this)}>立即授权</Button>
      </View>
    )
  }
}
// 通过connect方法，获取reducer中user中的state（作为组件props），引入action里的方法
export default connect(
  null,
  (dispatch) => ({
    setUserInfo (data) {
      dispatch(setUserInfo(data))
    }
  })
)(Index)