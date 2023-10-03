<template>
	<div class="dashboard">
	  <h1 class="dashboard-title">用户仪表盘</h1>
	  <el-row :gutter="20">
		<el-col :span="8">
		  <div class="user-card">
			<el-avatar :size="120" :src="imgurl" />
			<div class="user-info-cont">
			  <div class="user-info-name">{{ name }}</div>
			  <div>{{ role }}</div>
			</div>
		  </div>
		</el-col>
		<el-col :span="16">
		  <el-row :gutter="20" class="mgb20">
			<el-col :span="8">
			  <el-card shadow="hover" :body-style="{ padding: '0px' }">
				<div class="grid-item grid-con-1">
				  <el-icon class="grid-item-icon"><User /></el-icon>
				  <div class="grid-item-right">
					<div class="grid-num">人脸</div>
					<div>未注册</div>
				  </div>
				</div>
			  </el-card>
			</el-col>
			<!-- 其他内容 ... -->
		  </el-row>
		</el-col>
	  </el-row>
	</div>
  </template>
  
  <script setup lang="ts">
  import Schart from 'vue-schart';
  import { reactive } from 'vue';
  import imgurl from '../assets/img/img.jpg';
  
  const name = localStorage.getItem('ms_username');
  const role: string = name === 'admin' ? '超级管理员' : '普通用户';
  </script>
  
  <style scoped>
  .dashboard {
	margin-bottom: 30px;
  }
  
  .dashboard-title {
	font-size: 24px;
	margin-bottom: 20px;
  }
  
  .user-card {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
  }
  
  .user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
  }
  
  .user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
  }
  
  .grid-item {
	display: flex;
	align-items: center;
	height: 100px;
  }
  
  .grid-item-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
  }
  
  .grid-num {
	font-size: 30px;
	font-weight: bold;
  }
  
  .grid-item-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
  }
  
  .grid-con-1 .grid-item-icon {
	background: rgb(45, 140, 240);
  }
  
  .grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
  }
  
  .mgb20 {
	margin-bottom: 20px;
  }
  
  /* 其他样式 ... */
  </style>
  