<template>
  <transition name="fade">
    <div v-if="index == indexStore ? !show : show" class="video--content" v-bind:style="{ backgroundImage: 'linear-gradient(110deg,rgba(0,0,0,.99) 45%,rgba(0,0,0,.27) 70%,rgba(0,0,0,.67) 94%), url(' + videoPoster + ')' }">
      <div class="video--content--inner" >
          <div class="close--info mr-2" @click="closeInfo"><i class="fas fa-3x fa-times"> </i></div>
          <div class="video--content--title">
            <h1> {{ videoTitle }} </h1>
          </div>
          <div class="video--content--desc ml-1">
            <div class="video--content--ratings">
              <span> <strong> {{ videoRatings }}% relevante </strong> </span>
            </div>
            <div class="video--content--year ml-1">
              <span> <strong> {{ videoYear }} </strong></span>
            </div>
            <div class="video--content--runtime ml-1">
              <span> <strong> {{ videoRuntime }} </strong> </span>
            </div>
          </div>
          <div class="video--content--plot ml-1">
            <p> {{ videoPlot }} </p>
          </div>
          <div class="video--buttons mt-2 ml-1">
            <a href="#" class="btn btn-red mr-1"> <i class="fas fa-play mr-05"> </i> ASSISTIR </a>
            <a href="#" class="btn btn-black border-gray"> <i class="fas fa-check mr-05"> </i> MINHA LISTA </a>
          </div>
          <div class="video--content--cast ml-1 mt-2">
            <p>
              Estrelando: {{ videoActors }} <br>
              Diretor: {{ videoDirector }} <br>
              Gêneros: {{ videoGenre }} <br>
            </p>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import store from "@/store";
export default {
  props: ["video", "index"],
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeInfo: function () {
      this.$store.dispatch("setIndex", null);
      this.show = false;
    }
  },
  computed: {
    indexStore() {
      return store.state.index;
    },
    videoTitle() {
      return this.video.Title;
    },
    videoRatings() {
      return this.video.imdbRating * 10;
    },
    videoRated() {
      return this.video.Rated;
    },
    videoRuntime() {
      return this.video.Runtime;
    },
    videoPlot() {
      return this.video.Plot;
    },
    videoPoster() {
      return this.video.Poster;
    },
    videoYear() {
      return this.video.Year;
    },
    videoActors() {
      return this.video.Actors;
    },
    videoDirector() {
      return this.video.Director;
    },
    videoGenre() {
      return this.video.Genre;
    }

}

};

</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.video--content {
  min-width: 100%;
  min-height: 100%;
  min-height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 70%;
}
.video--content--title {
  width: 300px;
  margin-left: 1em;
}
.video--content--title h1 {
  font-family: 'Share Tech', sans-serif;
  font-size: 3em;
  color: $white;
  margin-bottom: 0.3em;
  text-transform: uppercase;
}
.video--content--desc {
  display: inline-flex;
}
.video--content--ratings span {
  color: #3bc359;
}
.video--content--plot {
  width: 500px;
  text-align: justify;
  color: #9a9595;
}
.border-gray {
  border: 1px solid $gray;
}
.video--content--cast {
  color: $gray;
  line-height: 1.4;
}
.close--info {
  float: right;
}
</style>
