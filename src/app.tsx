import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import { checkUserLogin, checkSessionStatus } from './utils'
import './app.scss'
import 'taro-ui/dist/style/index.scss'

const store = configStore()

class App extends Component {

  componentDidMount () {
    checkUserLogin(store.dispatch)
    checkSessionStatus()
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
