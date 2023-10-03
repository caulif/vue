<template>
	<div class="digital-signature-container">
	  <h1>数字签名展示页面</h1>
	  <!-- 上部分：输入明文框 -->
	  <div class="input-section">
		<textarea v-model="plaintext" placeholder="输入明文"></textarea>
	  </div>
	  <!-- 中部分：选项按钮 -->
	  <div class="options-section">
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
		selectedModality: '',
		selectedBiometrics: [],
		availableBiometrics: ['生物特征一', '生物特征二', '生物特征三'],
		fileInputs: [],
	  };
	},
	methods: {
	  selectModality(modality) {
		this.selectedModality = modality;
		// Update the number of file inputs based on the selected modality
		this.updateFileInputs();
	  },
	  toggleBiometric(biometric) {
		if (this.selectedBiometrics.includes(biometric)) {
		  // If biometric is already selected, remove it
		  this.selectedBiometrics = this.selectedBiometrics.filter(
			(selected) => selected !== biometric
		  );
		} else {
		  // Otherwise, add it if not exceeding the limit
		  if (this.selectedBiometrics.length < this.getMaxBiometrics()) {
			this.selectedBiometrics.push(biometric);
		  }
		}
		// Update the number of file inputs based on the selected biometrics
		this.updateFileInputs();
	  },
	  updateFileInputs() {
		const maxBiometrics = this.getMaxBiometrics();
		this.fileInputs = [];
		for (let i = 0; i < maxBiometrics; i++) {
		  this.fileInputs.push({ label: `文件${i + 1}`, result: '' });
		}
	  },
	  getMaxBiometrics() {
		switch (this.selectedModality) {
		  case 'single':
			return 1;
		  case 'double':
			return 2;
		  case 'multi':
			return 3;
		  default:
			return 0;
		}
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
  