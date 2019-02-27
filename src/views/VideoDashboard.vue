<template>
<div v-if="!loading" class="container">
      <video-group :videos="videoItems">
      </video-group>

      <video-detail :videos="videoItems">
      </video-detail>

  <div v-if="loading"> Loading... </div>

</div>
</template>

<script>
import VideoGroup from "@/views/VideoGroup";
import VideoDetail from "@/views/VideoDetail";

import OMDbAPISearch from "@/services/OMDbAPISearch";
import OMDbAPI from "@/services/OMDbAPI";

export default {
  components: {
    VideoGroup,
    VideoDetail
  },

  data() {
    return {
      videos: null,
      videoItems: [],
      loading: true
    };
  },

  created() {
    OMDbAPISearch(
      {
        apikey: "5f596cd4",
        s: "Art",
        type: "movie"
      },
      response => this.handleVideoResults(response)
    );

    window.eventBus.$on("videoListStarted", () => {
      this.loading = true;
    });

  },

  methods: {
    handleVideoResults(result) {
      this.videos = result;
      this.videos.forEach(item => {
        OMDbAPI(
          {
            apikey: "5f596cd4",
            i: item.imdbID,
            plot: "short"
          },
          response => {
            this.handleVideoItemResults(response);
          }
        );
      });
    },
    handleVideoItemResults(result) {
      this.videoItems = this.videoItems.concat(result);
      this.loading = false;
      console.log("handleVideoItemResults", this.videoItems);
    }
  }
};
</script>

<style lang="scss">
.container {
  max-width: $container-max-widths;
}
</style>
