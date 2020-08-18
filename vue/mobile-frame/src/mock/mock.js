import Mock from "mockjs";

const Random = Mock.Random;

Mock.mock('/user/userList', 'get', {
  "array|10": [{
    id: "@id()", //得到随机的id,对象
    username: "@cname()", //随机生成中文名字
    date: "@date()", //随机生成日期
    "avatar|1": [Random.image('150x200', Random.color(), '#FFF', 'Mock.js'), Random.image('150x200', Random.color(), '#FFF', 'Mock.js'), Random.image('150x200', Random.color(), '#FFF', 'Mock.js')], //生成图片,参数:size, background, foreground, text
    description: "@paragraph()", //描述
    ip: "@ip()", //IP地址
    email: "@email()" //email
  }]
})
