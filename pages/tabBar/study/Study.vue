<template>
  <div class="container">
    <main class="main-content">
      <section class="file-info-section">
        <h2>File Formats and Their Uses</h2>
        <div v-for="file in files" :key="file.name" class="file-info">
          <h3>{{ file.name }}</h3>
          <p>Use: {{ file.use }}</p>
          <p>Advantage: {{ file.advantage }}</p>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p>Study Smart, Learn Fast</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        { name: 'CSV (Comma-Separated Values)', use: 'Data storage and exchange, particularly for tabular data.', advantage: 'Lightweight, easy to process in data analysis.' },
        { name: 'TXT (Plain Text File)', use: 'Simple text data storage, ideal for logs and notes.', advantage: 'Minimal format, cross-platform compatibility.' },
        { name: 'JSON-LD (Linked Data)', use: 'Embedding structured data in web pages for semantic web applications.', advantage: 'Supports linking and structured data for enhanced interoperability.' },
        { name: 'TTL (Turtle)', use: 'Describing RDF triples, ideal for semantic data.', advantage: 'Human-readable, concise syntax for representing complex graphs.' },
        { name: 'RDF (Resource Description Framework)', use: 'Representing resource data and relations, widely used in knowledge graphs.', advantage: 'Supports rich data linking and cross-domain interoperability.' },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #333;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.file-info-section {
  margin: 20px 0;
}

.file-info {
  background-color: #f9f9f9;
  border-left: 5px solid #4CAF50;
  padding: 15px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}

.file-info:hover {
  background-color: #e9e9e9;
}

.footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}

* {
  user-select: text;
}
</style>
