<template>
  <section class="info">
      <video-info
        v-for="(video, index) in videos"
        :video="video"
        :index="index"
        :key="video.imdbID">
      </video-info>
  </section>
</template>

<script>
import VideoInfo from "@/views/VideoInfo";
export default {
  props: ["videos"],
  components: {
    VideoInfo
  }
};
</script>

<style scoped>
.info {
  background-color: #000;
  min-width: 100%;
  min-height: 400px;
  overflow-x: hidden;
  display: flex;
}
.info::-webkit-scrollbar {
  display: none;
}
</style>
