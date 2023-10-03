<template>
	<div class="digital-signature-container">
	  <h1>数字签名展示页面</h1>
  
	  <!-- 上部分：输入明文框 -->
	  <div class="section" id="input-section">
		<h2 class="section-title">上部分：输入明文框</h2>
		<textarea v-model="plaintext" placeholder="输入待签名内容"></textarea>
	  </div>
  
	  <!-- 中部分：选项按钮 -->
	  <div class="section" id="options-section">
		<h2 class="section-title">中部分：选项按钮</h2>
		<div class="option-row">
		  <label>模态：</label>
		  <button @click="selectModality('single')">单模态</button>
		  <button @click="selectModality('double')">双模态</button>
		  <button @click="selectModality('multi')">多模态</button>
		</div>
		<div class="option-row">
		  <label>生物特征：</label>
		  <button
			v-for="(biometric, index) in availableBiometrics"
			:key="index"
			@click="toggleBiometric(biometric)"
			:class="{ selected: selectedBiometrics.includes(biometric) }"
		  >
			{{ biometric }}
		  </button>
		</div>
	  </div>
  
	  <!-- 下部分：文件提交按钮 -->
	  <div class="section" id="file-upload-section">
		<h2 class="section-title">下部分：文件提交按钮</h2>
		<div class="file-upload-row" v-for="(fileInput, index) in fileInputs" :key="index">
		  <label>{{ fileInput.label }}：</label>
		  <input type="file" @change="handleFileUpload(index)" />
		  <button @click="submitFile(index)">提交文件</button>
		  <div class="result">{{ fileInput.result }}</div>
		</div>
	  </div>
  
	  <!-- 签名按钮 -->
	  <button @click="signDocument" class="sign-button">签名</button>
	</div>
  </template>
  
  <style scoped>
  /* Add your custom styles here */
  .digital-signature-container {
	text-align: center;
	margin: 20px;
  }
  
  .section {
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px;
	margin-top: 20px;
  }
  
  textarea {
	width: 100%;
	height: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	resize: none;
  }
  
  .option-row {
	margin-bottom: 10px;
  }
  
  button {
	padding: 5px 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
  }
  
  button.selected {
	background-color: #0056b3;
  }
  
  .file-upload-row {
	margin-bottom: 10px;
  }
  
  .result {
	margin-left: 10px;
	display: inline-block;
  }
  
  .sign-button {
	background-color: orange;
  }
  
  .return-button:hover {
	background-color: #ff9900;
  }
  
  .section-title {
	font-size: 10px; /* 可以通过修改这里的字体大小来改变标题的大小 */
  }
  </style>
  