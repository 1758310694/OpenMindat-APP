<template>
  <view class="buttons-container">
    <view class="button" @click="createRecord">
      <image src="/static/history_1.png" alt="创建记录"></image>
      <text>创建记录</text>
    </view>
    <view class="button" @click="viewHistory">
      <image src="/static/history_icon.png" alt="历史记录"></image>
      <text>历史记录</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    createRecord() {
      uni.showToast({
        title: '创建记录',
        icon: 'success'
      });
    },
    viewHistory() {
      uni.showToast({
        title: '历史记录',
        icon: 'success'
      });
    }
  }
}
</script>

<style>
.buttons-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.button image {
  width: 50px;
  height: 50px;
}

.button text {
  margin-top: 10px;
  font-size: 16px;
}
</style>
