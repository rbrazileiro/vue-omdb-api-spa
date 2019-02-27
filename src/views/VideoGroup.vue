<template>
  <section class="card drag-bing" v-dragscroll.x="true">
      <video-item
        v-for="(video, index) in videos"
        :video="video"
        :index="index"
        :key="video.imdbID">
        <img @click="toggle" v-bind:src="video.Poster" height="200px">
      </video-item>
  </section>
</template>

<script>
import VideoItem from "@/views/VideoItem";
export default {
  props: ["videos"],
  components: {
    VideoItem
  }
};
</script>

<style lang="scss">
.card {
  min-width: 100%;
  min-height: 100px;
  overflow-x: auto;
  display: flex;
}
.card::-webkit-scrollbar {
  display: none;
}
</style>
