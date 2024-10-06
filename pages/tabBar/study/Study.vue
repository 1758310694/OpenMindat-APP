<template>
  <div class="data-resource">
    <h2>Data resources</h2>
    <a :href="csvFilePath" class="download-link" download="Locality-Minerals.csv">下载 Locality-Minerals.csv</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      csvFilePath: '/static/data/Locality-Minerals.csv' // 更新为你的CSV文件路径
    };
  }
}
</script>

<style scoped>
.data-resource {
  text-align: center;
  margin-top: 30px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333; /* 文字颜色 */
}

.download-link {
  display: inline-block;
  padding: 12px 25px;
  background-color: #007BFF; /* 蓝色背景 */
  color: white; /* 白色文字 */
  text-decoration: none; /* 去掉下划线 */
  border-radius: 8px; /* 圆角边框 */
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2); /* 阴影效果 */
  font-weight: bold; /* 加粗文字 */
  transition: background-color 0.3s, transform 0.2s; /* 动画效果 */
}

.download-link:hover {
  background-color: #0056b3; /* 悬停时的背景颜色 */
  transform: translateY(-2px); /* 向上移动效果 */
}

.download-link:active {
  transform: translateY(0); /* 按下时返回原位 */
}
</style>
