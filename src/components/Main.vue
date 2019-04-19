<template>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>通讯录</template>
        <el-menu-item-group>
          <!-- <template slot="title">医生</template> -->
          <el-menu-item index="1-1">王医生</el-menu-item>
          <el-menu-item index="1-2">李医生</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>常用功能</template>
        <el-menu-item-group>
          <!-- <template slot="title">医生</template> -->
          <el-menu-item index="2-1">最近提问</el-menu-item>
          <el-menu-item index="2-2">历史咨询</el-menu-item>
           <el-menu-item index="2-2">添加好友</el-menu-item>
          </el-menu-item-group>
    
        
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: left; font-size: 15px"  >
      <!-- <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <!-- <h6>历史记录</h6> -->
      <span>历史记录</span>
    </el-header>
    <el-main > 
      <el-table :data="tableData" >
         <el-table-column type="index" :index="indexAdd" label="序号" width="140">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
    </el-main>
  </el-container>
</el-container>
</template>



<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

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
        tableData: Array(5).fill(item),
        methods:{ 
          indexAdd(index){
          return id+1;
        }
        }
      }
    }
  };
</script>