<template>
  <div id="app">
    <div class="content-wrap">
      <VideoAnalyzer></VideoAnalyzer>
      <MatchFaceList :list="listMatched"></MatchFaceList>
    </div>
  </div>
</template>

<script>
import VideoAnalyzer from './components/VideoAnalyzer';
import MatchFaceList from './components/MatchFaceList';
import uuid4 from 'uuid/v4';

import { listMatched } from './mock.js';

export default {
  name: 'app',
  components: {
    MatchFaceList,
    VideoAnalyzer
  },
  created() {
    setInterval(() => this.listMatched.unshift({...this.listMatched[0], id: uuid4() }), 2000);
  },
  data() {
    return {
      listMatched
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
body {
  padding: 0;
  margin: 0;
}
.content-wrap {
  display: flex;
  align-items: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
