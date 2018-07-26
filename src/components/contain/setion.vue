<template>
  <div>
      <el-row :gutter="24" style="margin-right:0px;margin-left:0px">
          <el-form label-width="80px">
            <el-col :span='24'>
              <el-col :span='20'>
                <el-col :span="6">
                    <el-form-item label="科室">
                      <el-select v-model="form.region" placeholder="科室">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="开始时间">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="结束时间">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>          
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                     <el-col :span='24'>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                     </el-col>
                        
                  </el-col>
                  
            </el-col>
            <el-col :span='4'>
                <el-col :span='24'>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                      </el-form-item>
                </el-col>
            </el-col>
            </el-col>
          </el-form>
        </el-row>
        <el-row style="text-align:left">
            <el-dropdown split-button type="primary">
                默认尺寸
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-main style="width:100%;height:100%">
          <el-table
          :data="tableData3"
          border height='450'
          style="width: 100%;">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table></el-main>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}

</script>
<style >
  .el-row {
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
  }
  .el-form-item {
    margin-bottom: 0px!important; 
}
.el-input__inner{
  height: 30px;
}
.el-button{
  padding: 7px 20px;
}
.el-button--primary {
  color: #0494d3;
    background-color: #fff;
    border: 1px solid #0494d3;
}
.el-main[data-v-39d1ac4a]{
  line-height: 40px!important;
}
.el-form-item__label{
  text-align: left;
}
.el-main{
  padding:0px;
}
</style>
