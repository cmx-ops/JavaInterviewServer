/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 注册用户的处理函数
exports.regUser = (req, res) => {
  res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req, res) => {
  res.send('login OK')
}

//获取用户列表
exports.getUserList = (req, res) => {
  var dataList = []
  const data = {
    date: '2016-05-02',
    name: '卢本伟',
    address: '上海市普陀区金沙江路 1518 弄'
  }
  for (let index = 0; index < 10; index++) {
    dataList.push(data)
  }
  res.send(dataList)
}