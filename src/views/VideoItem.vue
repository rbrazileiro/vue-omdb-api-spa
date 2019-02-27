<template>
    <div class="card--content">
      <img @click="toggle" class="card--content--img" v-bind:src="videoPoster">
    </div>
</template>

<script>
export default {
  props: ["video", "index"],
  methods: {
    toggle: function() {
      this.$store.dispatch("setIndex", this.index);
    }
  },
  computed: {
  videoPoster() {
    return this.video.Poster;
  }
}

};

</script>

<style lang="scss">
.card--content {
  background-color: $black;
  min-width: 340px;
  max-height: 200px;
  margin: 8px 0px 8px 5px;
  flex: 0 0 auto;
}
.card--content--selected {
  border: 4px solid #fff;
}
.card--content--img {
  object-fit: cover;
  object-position: top;
  width: 340px;
  height: 200px;
}
</style>
