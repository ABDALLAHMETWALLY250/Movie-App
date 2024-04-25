<template>
  <LoadingComp v-if="loding" />
  <div v-else class="w-100">
    <h2 class="text-white text-h4">Similar Movie</h2>
    <ShareMovie :movies="movies" />
  </div>
</template>

<script>
import ShareMovie from "@/components/Content/ShareMovie.vue";
import LoadingComp from "@/components/LoadingComp.vue";
export default {
  data() {
    return {
      movies: [],
      loding: true,
    };
  },
  components: {
    LoadingComp,
  },
  methods: {
    getSimilar() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjJiNWM3YWMyMDZmNGJhMWY1NjI1ZTE0MzNjZWY0MiIsInN1YiI6IjY1MDU5YTAwM2NkMTJjMDE0ZWJlOTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRoNKxC_8eeVrlNIY2IrHDmc6RFfYz8vR5UvBot5kUg",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.results;
          // console.log("SimilarMovie", response.results);
          this.loding = false;
        })
        .catch((err) => console.error(err));
    },
  },
  watch: {
    $route() {
      this.getSimilar();
    },
  },
  mounted() {
    this.getSimilar();
  },

  components: {
    ShareMovie,
  },
};
</script>
