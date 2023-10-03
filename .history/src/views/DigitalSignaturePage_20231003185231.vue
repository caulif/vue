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
		  <div class="option-buttons">
			<button
			  v-for="(modality, index) in modalities"
			  :key="index"
			  @click="selectModality(index)"
			  :class="{ active: selectedModality === index }"
			>
			  {{ modality }}
			</button>
		  </div>
		</div>
		<div class="option-row">
		  <label>生物特征：</label>
		  <div class="option-buttons">
			<button
			  v-for="(biometric, index) in selectedBiometrics"
			  :key="index"
			  @click="toggleBiometric(index)"
			  :class="{ active: selectedBiometrics[index] }"
			>
			  {{ biometric }}
			</button>
		  </div>
		</div>
	  </div>
	  <!-- 下部分：文件提交按钮 -->
	  <div class="file-upload-section">
		<div class="file-upload-row" v-for="(fileInput, index) in fileInputs" :key="index">
		  <label>{{ fileInput.label }}：</label>
		  <input type="file" @change="handleFileUpload(index)" />
		  <button @click="submitFile(index)" v-if="selectedModality !== -1">提交文件</button>
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
		modalities: ['单模态', '双模态', '多模态'],
		selectedModality: -1, // -1表示未选择任何模态
		selectedBiometrics: [false, false, false], // 记录生物特征的选择状态
		fileInputs: [
		  { label: '文件1', result: '' },
		  { label: '文件2', result: '' },
		  { label: '文件3', result: '' },
		],
	  };
	},
	methods: {
	  selectModality(index) {
		this.selectedModality = index;
		// 根据选择的模态，初始化或清空生物特征选择状态
		if (index === 0) {
		  this.selectedBiometrics = [false, false, false];
		} else if (index === 1) {
		  this.selectedBiometrics = [false, false, false];
		} else if (index === 2) {
		  this.selectedBiometrics = [false, false, false];
		}
		this.updateFileInputs();
	  },
	  toggleBiometric(index) {
		// 切换生物特征的选择状态
		this.selectedBiometrics[index] = !this.selectedBiometrics[index];
		this.updateFileInputs();
	  },
	  updateFileInputs() {
		// 根据选择的模态和生物特征更新文件输入框的数量
		const maxFiles = this.selectedModality === 0 ? 1 : this.selectedModality === 1 ? 2 : 3;
		this.fileInputs.forEach((fileInput, index) => {
		  fileInput.result = '';
		  fileInput.visible = index < maxFiles;
		});
	  },
	  handleFileUpload(index) {
		// 处理文件上传逻辑
		const fileInput = this.$refs.fileInput[index];
		// 实现文件上传逻辑，并更新this.fileInputs[index].result
	  },
	  submitFile(index) {
		// 提交文件逻辑
		// 调用Python代码并更新this.fileInputs[index].result
	  },
	},
  };
  </script>
  
  <style scoped>
  /* 添加自定义样式 */
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
  
  .option-buttons {
	display: flex;
	gap: 10px;
  }
  
  .option-buttons button {
	padding: 5px 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
  }
  
  .option-buttons button.active {
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
  