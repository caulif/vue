<template>
    <div class="generate-public-key-container">
      <h1>生成公钥页面</h1>
      <div class="public-key-section">
        <div class="public-key-item" v-for="(publicKey, index) in publicKeys" :key="index">
          <div class="public-key-wrapper">
            <div class="public-key-name">
              <img :src="`/assets/img/${index + 1}.svg`" class="icon-key" alt="小图标" /> <!-- 加载小图标 -->
              {{ publicKey.name }}
            </div>
            <label for="fileInput" class="custom-file-input-label">
              <span>选择文件</span>
            </label>
            <input
              type="file"
              id="fileInput"
              @change="uploadFile(index)"
              ref="fileInput"
              class="custom-file-input"
            />
            <button @click="generatePublicKey(index)" class="generate-button">生成公钥</button>
          </div>
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
        const fileInput = this.$refs.fileInput;
        fileInput.click(); // 触发文件选择框
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
    position: relative; /* 添加相对定位 */
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
    border: 1px solid #ccc; /* 添加边框 */
    border-radius: 5px;
    padding: 10px;
  }
  
  .public-key-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
  }
  
  .public-key-name {
    font-weight: bold;
    font-size: 20px;
    flex: 1;
  }
  
  /* 新的自定义文件选择按钮样式 */
  .custom-file-input-label {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
    display: inline-block;
  }
  
  .custom-file-input-label:hover {
    background-color: #0056b3;
  }
  
  /* 隐藏原生文件选择框 */
  .custom-file-input {
    display: none;
  }
  
  .generate-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
  }
  
  .generate-button:hover {
    background-color: #0056b3;
  }
  
  /* 返回按钮样式 */
  .return-button {
    position: absolute;
    bottom: 10px; /* 距离底部的距离 */
    right: 10px; /* 距离右侧的距离 */
    padding: 10px 20px;
    background-color: orange; /* 橙色背景 */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .return-button:hover {
    background-color: #ff9900; /* 橙色悬停颜色 */
  }
  
  /* 添加小图标的样式 */
  .icon-key {
    margin-right: 10px; /* 调整图标与文本的间距 */
    width: 20px; /* 设置图标宽度 */
    height: 20px; /* 设置图标高度 */
  }
  </style>
  