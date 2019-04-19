<template>
<div>
<el-container>
  <el-header>
    <div style="display: inline-block;position: absolute;left: 70px;color:#fff;">{{userName}}</div>
    <div style="width: 200px;position: absolute; right: 20px;display: inline-block;">
      <el-input placeholder="请输入内容" v-model="search" size="medium">
        <el-button slot="append" icon="el-icon-search" @click="searchItem()"></el-button>
      </el-input>
    </div>
  </el-header>

  <el-container style="">
    <el-aside width="200px" style="padding:20px 0;">
      <el-menu :default-openeds="['1','2']" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>通讯录</template>
          <el-menu-item-group>
            <el-menu-item index="1">王医生</el-menu-item>
            <el-menu-item index="1">李医生</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>常用功能</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">最近提问</el-menu-item>
            <el-menu-item index="2-2">历史咨询</el-menu-item>
            <el-menu-item index="2-3">添加好友</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main class="main">
      <div v-show="!this.activeIndex">
        <el-table :data="tableData" height="550">
          <el-table-column type="index" :index="indexAdd" label="序号" width="140">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
      <div v-show="this.activeIndex=='1'">
        <div style="height:650px;background-color:#fff;font-size:25px">聊天室
          <div class="main">
            <ul class="content">
              <li v-for="todo in todos" :key="todo.key" :class=todo.position><p :class=todo.class>{{todo.text}}</p></li>
            </ul>
            <div style="text-align:left;padding-left: 15px;">
              <i class="el-icon-upload2"></i>
              <i class="el-icon-phone-outline"></i>
              <i class="el-icon-picture"></i>
            </div>
            <el-input
              type="textarea"
              :rows="3"
              style="font-size:25px"
              placeholder="输入聊天内容"
              v-model="textarea">
            </el-input>
            <div style="position: absolute;right: 30px; margin-top: 5px;">
              <el-button type="primary" size="medium" plain>发送</el-button>
            </div>
          </div>
        </div>
      </div>
      <div v-show="this.activeIndex=='2-1'">
        <div style="height:500px;background-color:#fff">最近提问</div>
      </div>
      <div v-show="this.activeIndex=='2-2'">
        <div style="height:500px;background-color:#fff">历史咨询</div>
      </div>
      <div v-show="this.activeIndex=='2-3'">
        <div style="height:500px;background-color:#fff">添加好友</div>
      </div>
    </el-main>
  <!-- </el-container> -->
</el-container>
</el-container>
</div>
</template>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      id:1
      
    };
    return {
      userName: 'userName',
      search:'',
      tableData: Array(50).fill(item),
      activeIndex:'',
      textarea:'',
      todos:[{
        key:'1',
        text:'你好啊',
        position:'left',
        class:'leftP'
      },
      {
        key:'2',
        text:'你好',
        position:'right',
        class:'rightP'
      },
      {
        key:'3',
        text:'再见',
        position:'left',
        class:'leftP'
      },
      {
        key:'4',
        text:'傻逼',
        position:'right',
        class:'rightP'
      },
      {
        key:'5',
        text:'傻逼',
        position:'right',
        class:'rightP'
      },
      {
        key:'6',
        text:'傻逼',
        position:'right',
        class:'rightP'
      },
      {
        key:'7',
        text:'傻逼',
        position:'right',
        class:'rightP'
      },
      {
        key:'8',
        text:'别BB',
        position:'left',
        class:'leftP'
      }]
    }
  },
  methods:{
    searchItem(){

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    indexAdd(index){
      return index+1;
    },
    handleSelect(key){
      console.log(key)
      this.activeIndex = key;
    }
  }
}
</script>

<style scoped>
.el-header {
  line-height: 60px;
}
.el-pagination{
  margin-top: 10px;
}
.content{
  list-style: none;
  height: 400px;
  border: 2px solid #D1D3D6;
  overflow-y: scroll;
  padding: 0 10px;
  margin: 0;
}
.left{
  text-align: left;

}
.leftP{
  background-color: lightgrey;
  width:auto;
  max-width: 500px;
  height: auto;
  word-break: break-all;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
}
.right{
  text-align: right;
}
.rightP{
  background-color: yellowgreen;
  width:auto;
  max-width: 500px;
  height: auto;
  word-break: break-all;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
}
</style>