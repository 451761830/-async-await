const regeneratorRuntime = require("libs/regeneratorRuntime.js");
const promisify = require('libs/promisify.js');
const requestApi = promisify(wx.request);
const setStorageApi = promisify(wx.setStorage);
const getStorageApi = promisify(wx.getStorage);
const removeStorageApi = promisify(wx.removeStorage);

App({
  regeneratorRuntime,
  promisify,
  requestApi,
  setStorageApi,
  getStorageApi,
  removeStorageApi,
  onLaunch: async function () {
    // await setStorageApi({
    //   key: 'key',
    //   data: 'value'
    // })
    // let d = await getStorageApi({
    //   key: 'key'
    // })
    // console.log(d)
    console.log('onLaunch start')
    let res = await this.fnSetTimeOut()
    console.log('get res' + res)
  },
  fnSetTimeOut: async function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('set')
        let res = 'set'
        resolve(res)
      }, 5000)
    })
  },
  onHide () {
    console.log('a')
  }
})
