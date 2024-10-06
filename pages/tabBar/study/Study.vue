<template>
  <div class="container">

    <main class="main-content">
      <section class="file-info-section">
        <h2>File Formats and Their Uses</h2>
        
        <div class="file-info">
          <h3>CSV (Comma-Separated Values)</h3>
          <p>Use: Data storage and exchange, particularly for tabular data.</p>
          <p>Advantage: Lightweight, easy to process in data analysis.</p>
        </div>

        <div class="file-info">
          <h3>TXT (Plain Text File)</h3>
          <p>Use: Simple text data storage, ideal for logs and notes.</p>
          <p>Advantage: Minimal format, cross-platform compatibility.</p>
        </div>

        <div class="file-info">
          <h3>JSON-LD (Linked Data)</h3>
          <p>Use: Embedding structured data in web pages for semantic web applications.</p>
          <p>Advantage: Supports linking and structured data for enhanced interoperability.</p>
        </div>

        <div class="file-info">
          <h3>TTL (Turtle)</h3>
          <p>Use: Describing RDF triples, ideal for semantic data.</p>
          <p>Advantage: Human-readable, concise syntax for representing complex graphs.</p>
        </div>

        <div class="file-info">
          <h3>RDF (Resource Description Framework)</h3>
          <p>Use: Representing resource data and relations, widely used in knowledge graphs.</p>
          <p>Advantage: Supports rich data linking and cross-domain interoperability.</p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>Study Smart, Learn Fast</p>
    </footer>
  </div>
</template>

<style scoped>
/* 样式保持美观 */
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
}

.footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}
</style>
