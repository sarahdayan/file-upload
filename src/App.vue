<template>
  <div id="app">
    <file-loader :file="file" :progress="progress" />
  </div>
</template>

<script>
import FileLoader from "@/components/FileLoader";

export default {
  name: "App",
  components: { FileLoader },
  data() {
    return {
      file: {
        name: "reset.min.css",
        size: 815
      },
      progress: 50
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 30px;
  height: 100vh;
  display: flex;
  background: #bccae3;
  align-items: center;
  justify-content: center;
}

.loader {
  padding-bottom: 30px;
  background: white;
  border-radius: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
}

.meta {
  padding: 30px 30px 22px;
}

.title {
  color: #2c2f37;
  font-size: 18px;
  margin-bottom: 14px;
}

.size {
  color: #a0a8c4;
  font-size: 14px;
}

.track {
  width: 100%;
  height: 3px;
  background: rgb(40, 48, 227, 0.2);
}

.progressbar {
  height: 100%;
  background: #2830e3;
}
</style>
