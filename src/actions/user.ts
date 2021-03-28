// actions存放改变状态的具体方法（既有同步操作，也有异步操作，在UI中只引入action以改变状态）
export const setUserInfo = (userInfo) => {
  return {
    type: 'setUserInfo',
    payload: {
      userInfo
    }
  }
}
export const updateMoments = (moments) => {
  return {
    type: 'updateMoments',
    payload: {
      moments
    }
  }
}
// export const getRecommendDj = () => {
//   return dispatch => {
//     api.get('/personalized/djprogram').then((res) => {
//       let recommendDj = res.data.result
//       dispatch({
//         type: GETRECOMMENDDJ,
//         payload: {
//           recommendDj
//         }
//       })
//     })
//   }
// }