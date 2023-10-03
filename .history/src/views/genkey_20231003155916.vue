<template>
    <div class="generate-public-key-container">
      <h1>生成公钥页面</h1>
      <div class="public-key-section">
        <div class="public-key-name">{{ publicKeyName }}</div>
        <input type="file" @change="uploadFile" />
        <button @click="generatePublicKey" class="generate-button">生成公钥</button>
      </div>
      <router-link to="/" class="return-button">返回</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        publicKeyName: '',
        file: null,
      };
    },
    methods: {
      uploadFile(event) {
        this.file = event.target.files[0];
      },
      generatePublicKey() {
        // 发送HTTP请求到后端，生成公钥
        // 处理后端返回的结果
        // 弹窗显示结果
        // 示例代码：axios.post('/generate_keys').then(response => { ... })
  
        // 这里需要调用指定的Python程序并弹出返回值的窗口
      },
    },
  };
  </script>
  
  <style scoped>
  /* 样式可以根据你的需求进行自定义 */
  .generate-public-key-container {
    text-align: center;
    margin: 20px;
  }
  
  .public-key-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  
  .public-key-name {
    font-weight: bold;
    font-size: 20px;
  }
  
  .generate-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .generate-button:hover {
    background-color: #0056b3;
  }
  
  .return-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #ccc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .return-button:hover {
    background-color: #999;
  }
  </style>
  