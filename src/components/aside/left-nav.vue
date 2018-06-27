<template>
  <div id='leftnav '>
    <el-menu>
      <el-menu-item>
        <router-link to='/setion'>病人入院</router-link>
        <span>></span>
      </el-menu-item>
      <el-menu-item>选项1
        <span>></span>
      </el-menu-item>
      <el-menu-item>选项1
        <span>></span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>


</script>

<style scoped>
  .leftDiv div {
    height: 30px;
  }
  .el-menu {
    background: #eeeeee
  }
  .el-menu-item {
    height: 30px;
    line-height: 30px;
    border-radius: 0px;
    padding-top: 1px;
    border-radius: 0px;
    background-color: #F4F4F4;
    padding: 0px;
    border-color: #e4e4e4;
    border: 1px solid #ddd;
    ;
    border-left: none;
    border-right: none;
    color: #000000;
    text-align: left;
    padding-right: 24px
  }
  .el-menu span {
    float: right
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    color: #fff !important;
    background-color: #3eafe0 !important;
  }
</style>
