<template>
	<div class="digital-signature-container">
	  <h1>数字签名展示页面</h1>
  
	  <!-- 上部分：输入明文框 -->
	  <div class="section" id="input-section">
		<h2>上部分：输入明文框</h2>
		<textarea v-model="plaintext" placeholder="输入待签名内容"></textarea>
	  </div>
  
	  <!-- 中部分：选项按钮 -->
	  <div class="section" id="options-section">
		<h2>中部分：选项按钮</h2>
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
		<h2>下部分：文件提交按钮</h2>
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
  
  <script>
  export default {
	data() {
	  return {
		plaintext: "",
		selectedModality: "",
		selectedBiometrics: [],
		availableBiometrics: ["生物特征一", "生物特征二", "生物特征三"],
		fileInputs: [],
	  };
	},
	methods: {
	  selectModality(modality) {
		this.selectedModality = modality;
		this.updateFileInputs();
	  },
	  toggleBiometric(biometric) {
		if (this.selectedBiometrics.includes(biometric)) {
		  this.selectedBiometrics = this.selectedBiometrics.filter(
			(selected) => selected !== biometric
		  );
		} else {
		  if (this.selectedBiometrics.length < this.getMaxBiometrics()) {
			this.selectedBiometrics.push(biometric);
		  }
		}
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
		// 处理文件上传逻辑
		const fileInput = this.$refs.fileInput;
		// 实现文件上传逻辑并更新 this.fileInputs[index].result
	  },
	  submitFile(index) {
		// 提交文件逻辑
		// 调用Python代码并更新 this.fileInputs[index].result
	  },
	  signDocument() {
		// 检查是否有上传文件
		const hasUploadedFiles = this.fileInputs.some((input) => input.result !== '');
		if (!hasUploadedFiles) {
		  window.alert("没有上传文件，签名失败");
		  return;
		}
  
		// 执行签名逻辑
		const plainTextData = this.plaintext;
  
		// 示例：调用Python脚本并获取签名结果
		this.$axios
		  .post('/api/sign', { plainTextData }) // 假设这里是与后端的签名API通信
		  .then((response) => {
			const signatureResult = response.data.signature;
  
			if (signatureResult !== null) {
			  // 如果签名成功，显示签名结果
			  window.alert("签名成功，签名值为：" + signatureResult);
			} else {
			  // 如果签名失败，显示签名失败消息
			  window.alert("签名失败");
			}
		  })
		  .catch((error) => {
			// 处理错误情况
			console.error("签名失败:", error);
			window.alert("签名失败");
		  });
	  },
	},
  };
  </script>
  
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
  </style>
  