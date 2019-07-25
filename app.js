const regeneratorRuntime = require("libs/regeneratorRuntime.js");
const promisify = require('libs/promisify.js');
const requestApi = promisify(wx.request);

App({
  regeneratorRuntime,
  promisify,
  requestApi,
  onLaunch: function () {

  }
})
