<template>
    <div class="header">
        <div class="item item1"></div>
        <div class="item item2"></div>
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
</style>
  