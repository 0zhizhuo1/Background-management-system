import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
            menu: [
                {
                  path: "/hoMe",
                  name: "hoMe",
                  label: "首页",
                  icon: "s-home",
                  url: "Home/Home",
                },
                {
                  path: "/MAll",
                  name: "MAll",
                  label: "商品管理",
                  icon: "video-play",
                  url: "MallManage/MallManage",
                },
                {
                  path: "/uSer",
                  name: "uSer",
                  label: "用户管理",
                  icon: "user",
                  url: "UserManage/UserManage",
                },
                {
                  path: "/page",
                  name: "page",
                  label: "其他",
                  icon: "location",
                  children: [
                    {
                      path: "/PAge1",
                      name: "PAge1",
                      label: "页面1",
                      icon: "setting",
                      url: "Other/PageOne.vue",
                    },
                    {
                      path: "/PAge2",
                      name: "PAge2",
                      label: "首页2",
                      icon: "setting",
                      url: "Other/PageTwo.vue",
                    },
                  ],
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: "/hoMe",
              name: "hoMe",
              label: '首页',
              icon: 's-home',
              url: 'home/index'
            },
            {
              path: "/uSer",
              name: "uSer",
              label: "用户管理",
              icon: "user",
              url: "UserManage/UserManage",
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}
