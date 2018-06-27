<template>
  <div class='contain'>
    <el-container id='order-list'>
      <el-header id='headers'>
        <headNav></headNav>
      </el-header>
      <el-container>
        <el-aside width="180px">
          <router-view name='left'></router-view>
        </el-aside>
        <el-main>
          <router-view name='main'></router-view>
        </el-main>
      </el-container>
      <el-footer id='footer' height='25px'>
          <footers></footers>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import footers from '../footer/footer'
import headNav from '../header/business'
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    var oderheight = document.body.clientHeight
    document.getElementById('order-list').style.height = oderheight + 'px'
    document.getElementById('headers').style.padding = '0px'
  },
  components: {
    footers,
    headNav
  }
}
</script>

<style lang="scss" scoped>
body{
  margin: 0px!important;
}
.el-header,  {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    text-align: center;
    background: #3eafe0;
    color: #fff;
    font-size: .875rem;
    line-height: 25px;
  }
  .el-aside {
    background-color: #eee;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
