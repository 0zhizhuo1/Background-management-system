<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item v-for="obj in formLabel" :key="obj.label" :label="obj.label">
      <el-input
        v-if="obj.type === 'input'"
        v-model="obj[obj.model]"
        :placeholder="'请输入' + obj.label"
      ></el-input>
      <el-switch v-if="obj.type === 'switch'" :v-model="form[obj.model]">
      </el-switch>
      <el-date-picker
        v-if="obj.type === 'date'"
        type="date"
        value-format="yyyy-mm-dd"
        placeholder="选择日前"
        v-model="obj[obj.model]"
      >
      </el-date-picker>
      <el-select
        v-if="obj.type === 'select'"
        placeholder="请选择"
        v-model="obj[obj.model]"
      >
        <el-option
          v-for="time in obj.opts"
          :key="time.value"
          :label="time.label"
          :value="time.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  name: "FoRm",
};
</script>

<style lang="less" scoped>
</style>