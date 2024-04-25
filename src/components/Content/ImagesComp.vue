<template>
  <h2 class="text-white text-h4">Image</h2>

  <v-container>
    <v-row>
      <v-col v-for="img in images" :key="img.id" cols="12" md="4" sm="6">
        <v-img
          cover
          class="w-100"
          :src="
            `https://image.tmdb.org/t/p/w300/${img.file_path}` !==
            `https://image.tmdb.org/t/p/w300/null`
              ? `https://image.tmdb.org/t/p/w300/${img.file_path}`
              : `https://placehold.co/300x400`
          "
          :lazy-src="
            `https://image.tmdb.org/t/p/w300/${img.file_path}` !==
            `https://image.tmdb.org/t/p/w300/null`
              ? `https://image.tmdb.org/t/p/w300/${img.file_path}`
              : `https://placehold.co/300x400`
          "
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    fetchImage() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjJiNWM3YWMyMDZmNGJhMWY1NjI1ZTE0MzNjZWY0MiIsInN1YiI6IjY1MDU5YTAwM2NkMTJjMDE0ZWJlOTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRoNKxC_8eeVrlNIY2IrHDmc6RFfYz8vR5UvBot5kUg",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/images`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log("img", response.backdrops);
          this.images = response.backdrops;
        })
        .catch((err) => console.error(err));
    },
  },
  watch: {
    $route() {
      this.fetchImage();
    },
  },
  mounted() {
    this.fetchImage();
  },
};
</script>