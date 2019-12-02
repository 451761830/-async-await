const app = getApp();
const { regeneratorRuntime, requestApi, getStorageApi, removeStorageApi } = app;

Page({
  data: {

  },
  onLoad: async function () {
    console.log('onLoad start')
    try {
      let res = await requestApi({
        url: 'http://sz.chigua.ineice.cn/miniapps-api/auth/token',
        data: {
          "code": 'code',
          "clientId": "cgb0dfd1547e0b165b"
        },
        method: "POST",
        header: {
          "content-Type": "application/x-www-form-urlencoded"
        }
      })
      console.log(JSON.stringify(res))
    } catch (err) {
      console.log('请求失败: ' + JSON.stringify(err))
    }
   },
  onShow: async function(){
    let d = (await getStorageApi({
      key: 'key'
    })).data
    console.log('onShow' + d)
  },
  onHide: async function () {
    await removeStorageApi({
      key: 'key'
    })
    try {
      let d = await getStorageApi({
        key: 'key'
      })
      console.log('onHide' + d.data)
    } catch (err) {
      console.log('onHide' + JSON.stringify(err))
    }
  }
})
