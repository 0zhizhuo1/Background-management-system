<template>
  <el-container style="height: 100%">
    <el-aside style="width:'aute">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <commonheader></commonheader>
      </el-header>
      <tag></tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from "../components/cmmonAside.vue";
import commonheader from "../components/commonheader.vue";
import tag from "../components/commonTag.vue";
export default {
  name: "MaIn",
  components: { commonAside, commonheader, tag },
};
</script>

<style lang='less'>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>