<template>
  <div class="common-table">
    <el-table :data="tableData" stripe>
      <el-table-column
        show-overflow-tooltip
        v-for="obj in tableLable"
        :key="obj.prop"
        :label="obj.label"
        :width="obj.width ? obj.width : 125"
      >
        <template slot-scope="scope">
          <span style="maring-left: 10px">{{ scope.row[obj.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作 " min-width="180">
        <el-button size="mini" @click="handleEdit">修改</el-button>
        <el-button size="mini" type="danger " @click="handleDelete"
          >删除</el-button
        >
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev,pager,next"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="20"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "commonTable",
  props: {
    tableData: Array,
    tableLable: Array,
    tableList: Array,
  },
  data() {
    return {
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less" scoped>
.common-table {
  height: 120%;
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: -40px;
    // right: 20px;
  }
}
</style>