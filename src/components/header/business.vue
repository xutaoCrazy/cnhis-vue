<template>
    <div class="header">
        <div class="item item1">
          <div class='logo'>

          </div>
          <div class='inline systemText'>
              云健康 . 病人入院系统
          </div>
        </div>
        <div class="item item2" id='menu'>
            <ul class='list-unstyle list-inline'>
                <li class='header checkMinMenu'>
                  <router-link to='/leftnav'>业务平台</router-link>
          
                </li>
                <li class='header '>
                    <router-link to=''>统计分析</router-link>
                 </li>
                 <li class='header '>
                    <router-link to=''>参数设置</router-link>
                 </li>
                 <li class='header'>
                    <router-link to=''>消息中心</router-link>
                 </li>
            </ul>
            <router-view></router-view>
        </div>
        <div class="item item3"></div>
     </div>
  </template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  height: 60px;
  background: url(../../assets/topbg.png)
}
#menu{
  position: relative;
  top: 0px;
  /* width: 100%; */
  height: 100%;
  margin-left: 50px;
}
.list-inline{
  height: 100%;
  width: 500px;
  margin: 0 auto;
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}
.logo{
  position: relative;
  top: 12px;
  margin: 0 -15px 0 25px;
  background: url(../../assets/logo.png) no-repeat;
  width: 45px;
  height: 46px;
  float: left;
}
.systemText{
  font-size: 1.5rem;
  line-height: 65px;
  position: relative;
  color: #fff
}
.item1{
  background: url(../../assets/topleft.png) no-repeat
}
.item3{
  background: url(../../assets/topright.png) no-repeat right
}
.item{
  flex: 1;
}
.item1{
  flex:0 0 25%
}
.item2{
  flex: 0 0 50%;
}
.item4{
  flex: 0 0 25%;
}
.checkMinMenu {
  display: inline-block;
  height: 100%;
  padding: 0px;
  background: #045d95;
  border-left: 1px solid #035589;
  border-right: 1px solid #035589;
}
.checkMinMenu span{
  display: inline-block;
  width: 16px;
  height: 15px;
  position: relative;
  margin-right: 5px;
  top: 1px;
}
.checkMinMenu {
  cursor: pointer;
  color: #FFFFFF;
  text-decoration: none;
  padding: 0px 15px;
  display: block;
  text-align: center;
  height: 100%;
}
.list-inline li{
  float: left;
  padding: 0px 15px;
}
.list-inline li  a{
  color: #FFFFFF;
  text-decoration: none;
}
</style>
