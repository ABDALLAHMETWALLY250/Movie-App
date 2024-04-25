<template>
  <v-dialog height="950" width="950">
    <template v-slot:activator="{ props }">
      <v-btn variant="outlined" v-bind="props">
        <v-icon>mdi-play-circle-outline</v-icon> play trailer</v-btn
      >
    </template>

    <template v-slot:default="{ isActive }">
      <v-card height="950" title="Trailer">
        <iframe height="950" :src="movies.videos" title="description"></iframe>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red" variant="outlined" @click="isActive.value = false"
            ><v-icon>mdi-close</v-icon> Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      movies: {
        videos: [],
      },
    };
  }, methods:{
    fetchVideo(){
      const videos = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjJiNWM3YWMyMDZmNGJhMWY1NjI1ZTE0MzNjZWY0MiIsInN1YiI6IjY1MDU5YTAwM2NkMTJjMDE0ZWJlOTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRoNKxC_8eeVrlNIY2IrHDmc6RFfYz8vR5UvBot5kUg",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?language=en-US`,
      videos
    )
      .then((response) => response.json())
      .then(
        (response) =>
          (this.movies.videos =
            "https://www.youtube.com/embed/" + response.results[0].key)
      )
      .catch((err) => console.error(err));
    }
  },
    watch: {
    $route() {
      this.fetchVideo();
    },
    }
  mounted() {
    this.fetchVideo();
  },
};
</script>

<style></style>
