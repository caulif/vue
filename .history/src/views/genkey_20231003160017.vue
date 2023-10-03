<template>
    <div class="generate-public-key-container">
      <h1>生成公钥页面</h1>
      <div class="public-key-section">
        <div class="public-key-item" v-for="(publicKey, index) in publicKeys" :key="index">
          <div class="public-key-name">{{ publicKey.name }}</div>
          <input type="file" @change="uploadFile(index)" />
          <button @click="generatePublicKey(index)" class="generate-button">生成公钥</button>
          <div class="generated-result">{{ publicKey.result }}</div>
        </div>
      </div>
      <router-link to="/" class="return-button">返回</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        publicKeys: [
          { name: '公钥1', result: '' },
          { name: '公钥2', result: '' },
          { name: '公钥3', result: '' },
        ],
      };
    },
    methods: {
      uploadFile(index) {
        // 上传文件逻辑，index参数用于区分是哪个公钥区域的上传
        const fileInput = this.$refs[`fileInput${index}`];
        this.publicKeys[index].file = fileInput.files[0];
      },
      generatePublicKey(index) {
        // 发送HTTP请求到后端，生成公钥，将结果保存在result字段中
        // 处理后端返回的结果
        // 弹窗显示结果
        // 示例代码：axios.post('/generate_keys').then(response => { ... })
  
        // 这里需要调用指定的Python程序并弹出返回值的窗口
        // 将结果保存在result字段中
        this.publicKeys[index].result = '生成结果'; // 用实际的生成结果替换此示例字符串
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
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .public-key-item {
    display: flex;
    flex-direction: column;
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
    margin-top: 10px;
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
  
  .generated-result {
    margin-top: 10px;
    font-size: 14px;
    font-style: italic;
  }
  </style>
  