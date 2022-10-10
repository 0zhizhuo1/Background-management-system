<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <el-menu-item
      @click="meau(obj)"
      v-for="obj in nochildren"
      :index="obj.path"
      :key="obj.path"
    >
      <i :class="'el-icon-' + obj.icon"></i>
      <span slot="title">{{ obj.label }}</span>
    </el-menu-item>

    <el-submenu v-for="obj in haschildren" :index="obj.icon" :key="obj.path">
      <template slot="title">
        <i :class="'el-icon-' + obj.icon"></i>
        <span slot="title">{{ obj.label }}</span>
      </template>
      <el-menu-item-group v-for="time in obj.children" :key="time.path">
        <el-menu-item @click="meau(time)" :index="time.path">{{
          time.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "commonAside",
  data() {
    return {
      // isCollapse: false,
      menu: [
        // {
        //   path: "/hoMe",
        //   name: "hoMe",
        //   label: "首页",
        //   icon: "s-home",
        //   url: "Home/Home",
        // },
        // {
        //   path: "/MAll",
        //   name: "MAll",
        //   label: "商品管理",
        //   icon: "video-play",
        //   url: "MallManage/MallManage",
        // },
        // {
        //   path: "/uSer",
        //   name: "uSer",
        //   label: "用户管理",
        //   icon: "user",
        //   url: "UserManage/UserManage",
        // },
        // {
        //   path: "/page",
        //   name: "page",
        //   label: "其他",
        //   icon: "location",
        //   children: [
        //     {
        //       path: "/PAge1",
        //       name: "PAge1",
        //       label: "页面1",
        //       icon: "setting",
        //       url: "Other/PageOne",
        //     },
        //     {
        //       path: "/PAge2",
        //       name: "PAge2",
        //       label: "首页2",
        //       icon: "setting",
        //       url: "Other/PageTwo",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    meau(obj) {
      this.$router.push({
        name: obj.name,
      });
      this.$store.commit("selectMenu", obj);
    },
  },
  computed: {
    nochildren() {
      return this.asyncMenu.filter((time) => !time.children);
    },
    haschildren() {
      return this.asyncMenu.filter((time) => time.children);
    },
    isCollapse() {
      return this.$store.state.tab.siCollapse;
    },
    asyncMenu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>
<style lang='less' scoped>
.el-menu {
  height: 100vh;
  border: none;
  h3 {
    height: 60px;
    line-height: 65px;
    text-align: center;
    color: #fff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>