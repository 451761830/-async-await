const app = getApp();
const { regeneratorRuntime, promisify, requestApi } = app;
const loginApi = promisify(wx.login);

Page({
  data: {

  },
  onLoad: async function () {
    try {
      let resLogin = await loginApi();
      console.log('登录 success code：' + JSON.stringify(resLogin));
    } catch (err) {
      console.log('登录 fail code：' + JSON.stringify(resLogin));
    }
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

  }
})
