<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(obj, index) in tags"
      :key="obj.name"
      :closable="obj.name !== 'hoMe'"
      :effect="$route.name === obj.name ? 'dark' : 'pink'"
      @click="changeMenu(obj)"
      @close="handleClose(obj, index)"
    >
      {{ obj.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "TAg",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(tag) {
      this.$router.push({ name: tag.name });
    },
    handleClose(tag, index) {
      console.log(tag, index);
      this.close(tag);
      const length = this.tags.length - 1;
      if (tag.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({ name: this.tags[length - 1].name });
      } else {
        this.$router.push({ name: this.tags[length].name });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>