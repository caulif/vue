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
		  <button
			v-for="modality in modalities"
			:key="modality.value"
			@click="selectModality(modality.value)"
			:class="{ 'selected': selectedModality === modality.value }"
		  >
			{{ modality.label }}
		  </button>
		</div>
		<div class="option-row">
		  <label>生物特征：</label>
		  <button
			v-for="biometric in biometrics"
			:key="biometric.value"
			@click="selectBiometric(biometric.value)"
			:class="{ 'selected': selectedBiometric === biometric.value }"
		  >
			{{ biometric.label }}
		  </button>
		</div>
	  </div>
	  <!-- 下部分：文件提交按钮 -->
	  <div class="file-upload-section">
		<div
		  class="file-upload-row"
		  v-for="(fileInput, index) in fileInputs"
		  :key="index"
		  v-if="index < selectedBiometricCount"
		>
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
		modalities: [
		  { label: '单模态', value: 'single' },
		  { label: '双模态', value: 'double' },
		  { label: '多模态', value: 'multi' },
		],
		selectedModality: null,
		biometrics: [
		  { label: '生物特征一', value: 'biometric1' },
		  { label: '生物特征二', value: 'biometric2' },
		  { label: '生物特征三', value: 'biometric3' },
		],
		selectedBiometric: null,
		fileInputs: [
		  { label: '文件1', result: '' },
		  { label: '文件2', result: '' },
		  { label: '文件3', result: '' },
		],
	  };
	},
	computed: {
	  selectedBiometricCount() {
		// 计算根据所选模态应该显示的文件输入数量
		if (this.selectedModality === 'single') {
		  return 1;
		} else if (this.selectedModality === 'double') {
		  return 2;
		} else if (this.selectedModality === 'multi') {
		  return 3;
		}
		return 0;
	  },
	},
	methods: {
	  selectModality(modality) {
		this.selectedModality = modality;
		this.selectedBiometric = null;
	  },
	  selectBiometric(biometric) {
		this.selectedBiometric = biometric;
	  },
	  handleFileUpload(index) {
		// 处理文件上传逻辑
		const fileInput = this.$refs.fileInput;
		// 实现文件上传逻辑并更新this.fileInputs[index].result
	  },
	  submitFile(index) {
		// 提交文件逻辑
		// 调用Python代码并更新this.fileInputs[index].result
	  },
	},
  };
  </script>
  
  <style scoped>
  /* 添加你的自定义样式 */
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
  