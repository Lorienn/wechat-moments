import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtNavBar, AtTextarea, AtList, AtListItem } from 'taro-ui'

import './index.scss'

export default class Add extends Component {
  static defaultProps = {
  }
  state = {
    content: '',
    selector: ['公开', '私密', '部分可见', '不给谁看'],
    selectorChecked: '公开'
  }
  goIndexPage () {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  handleChange (content) {
    this.setState({
      content
    })
  }
  onChange (e) {
    this.setState(() => {
      return {
        selectorChecked: this.state.selector[e.detail.value]
      }
    })
  }
  addMoment () {
    const { content, selectorChecked } = this.state
    console.log(content, selectorChecked)
    this.goIndexPage()
  }
  // componentWillMount () { }
  // componentDidMount () { }
  // componentWillUnmount () { }
  // componentDidShow () { }
  // componentDidHide () { }
  render () {
    const { content, selector, selectorChecked } = this.state
    return (
      <View className='add'>
        {/* 顶部导航栏 */}
        <AtNavBar
          color='#000'
          leftIconType='chevron-left'
          rightFirstIconType='check'
          onClickLeftIcon={this.goIndexPage}
          onClickRgIconSt={this.addMoment.bind(this)}
        />
        {/* 输入区域 */}
        <AtTextarea
          count={false}
          value={content}
          onChange={this.handleChange.bind(this)}
          maxLength={200}
          height={400}
          placeholder='这一刻的想法...'
        />
        {/* 隐私选项 */}
        <Picker mode='selector' range={selector} onChange={this.onChange.bind(this)}>
          <AtList>
            <AtListItem
              title='谁可以看'
              extraText={selectorChecked}
              iconInfo={{ color: '#ccc', value: 'eye', }}
            />
            <AtListItem
              title='提醒谁看'
              iconInfo={{ color: '#ccc', value: 'bell', }}
            />
          </AtList>
        </Picker>
      </View>
    )
  }
}
