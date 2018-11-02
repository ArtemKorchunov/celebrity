<template>
  <div id="app">
    <div class="content-wrap">
      <VideoAnalyzer></VideoAnalyzer>
      <MatchFaceList :list="listMatched"></MatchFaceList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VideoAnalyzer from './components/VideoAnalyzer';
import MatchFaceList from './components/MatchFaceList';
import uuid4 from 'uuid/v4';


export default {
  name: 'app',
  components: {
    MatchFaceList,
    VideoAnalyzer
  },
  created() {
    setInterval(() => {
      axios.post("http://localhost:9090/video_feed").then((res) => {
        let filteredResponse = res.data.response.filter(item => item.face_image);
        filteredResponse.forEach(item => this.listMatched.unshift({...item, uid: uuid4() }));
      })
    }, 3000)
  },
  data() {
    return {
      listMatched: []
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
