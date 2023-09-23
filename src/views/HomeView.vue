<template>
  <LoadingComp />

  <v-container style="margin-top: 5em">
    <h4 class="text-yellow-darken-3 text-h5">Popular Movies</h4>
  </v-container>

  <ShareMovie :movies="movies" />
  <hr />
  <UpCamming />
</template>

<script>
import LoadingComp from "@/components/LoadingComp.vue";
import UpCamming from "@/components/Content/UpCamming.vue";
import ShareMovie from "@/components/Content/ShareMovie.vue";
export default {
  name: "HomePage",

  data: () => ({
    movies: [],
  }),
  mounted() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjJiNWM3YWMyMDZmNGJhMWY1NjI1ZTE0MzNjZWY0MiIsInN1YiI6IjY1MDU5YTAwM2NkMTJjMDE0ZWJlOTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRoNKxC_8eeVrlNIY2IrHDmc6RFfYz8vR5UvBot5kUg",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.movies = response.results;
        console.log(response);
      })
      .catch((err) => console.error(err));
  },
  methods: {
    genereTypeName(id) {
      if (this.genres[id]) {
        return this.genres[id].name;
      }
    },
  },
  components: {
    UpCamming,
    LoadingComp,
    ShareMovie,
  },
};
</script>
