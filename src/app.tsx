import { Component } from 'react'
// 创建store并在全局使用，无需修改
import { Provider } from 'react-redux'
import configStore from './store'
import { userLogin } from './utils'
import './app.scss'
import 'taro-ui/dist/style/index.scss'

const store = configStore()

class App extends Component {

  componentDidMount () {
    userLogin()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
