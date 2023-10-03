<template>
	<div class="digital-signature-container">
	  <h1>数字签名展示页面</h1>
	  <!-- 上部分：输入明文框 -->
	  <div class="input-section">
		<textarea v-model="plaintext" placeholder="输入明文"></textarea>
	  </div>
	  <!-- 中部分：选项区域 -->
	  <div class="options-section">
		<div class="option-row">
		  <label>模态：</label>
		  <select v-model="selectedModality">
			<option value="single">单模态</option>
			<option value="double">双模态</option>
			<option value="multi">多模态</option>
		  </select>
		</div>
		<div class="option-row">
		  <label>生物特征：</label>
		  <select v-model="selectedBiometric" @change="updateFileInputs()">
			<option value="biometric1">生物特征一</option>
			<option value="biometric2">生物特征二</option>
			<option value="biometric3">生物特征三</option>
		  </select>
		</div>
	  </div>
	  <!-- 下部分：文件提交按钮 -->
	  <div class="file-upload-section">
		<div class="file-upload-row" v-for="(fileInput, index) in fileInputs" :key="index">
		  <label>{{ fileInput.label }}：</label>
		  <input type="file" @change="handleFileUpload(index)" />
		  <button @click="submitFile(index)">提交文件</button>
		  <div class="result">{{ fileInput.result }}</div>
		</div>
	  </div>
	  <router-link to="/PublicKeyGenerationPage" class="return-button">返回</router-link>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		plaintext: '',
		selectedModality: 'single',
		selectedBiometric: 'biometric1',
		fileInputs: [
		  { label: '文件1', result: '' },
		  { label: '文件2', result: '' },
		  { label: '文件3', result: '' },
		],
	  };
	},
	methods: {
	  updateFileInputs() {
		// Update the number of file inputs based on the selected options
		// You can implement this logic according to your requirements
	  },
	  handleFileUpload(index) {
		// Handle file upload logic here
		const fileInput = this.$refs.fileInput;
		// Implement file upload logic and update this.fileInputs[index].result
	  },
	  submitFile(index) {
		// Submit file logic here
		// Call Python code and update this.fileInputs[index].result
	  },
	},
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .digital-signature-container {
	text-align: center;
	margin: 20px;
	position: relative;
  }
  
  .input-section {
	margin-top: 20px;
  }
  
  textarea {
	width: 100%;
	height: 100px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
  }
  
  .options-section {
	margin-top: 20px;
  }
  
  .option-row {
	margin-bottom: 10px;
  }
  
  select {
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
  }
  
  .file-upload-section {
	margin-top: 20px;
  }
  
  .file-upload-row {
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
  
  .result {
	margin-left: 10px;
	display: inline-block;
  }
  
  .return-button {
	position: absolute;
	bottom: 10px;
	right: 10px;
	padding: 10px 20px;
	background-color: orange;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
  }
  
  .return-button:hover {
	background-color: #ff9900;
  }
  </style>
  