<template>
  <v-dialog v-model="isActive" height="950" width="950">
    <template v-slot:activator="{ on }">
      <v-btn variant="outlined" v-on="on">
        <v-icon mdi-play-circle-outline></v-icon> play trailer</v-btn>
    </template>

    <template v-slot:default>
      <v-card height="950" title="Trailer">
        <template v-if="!loading && videos.length === 0">
          <v-alert variant="warning">No trailers found for this movie.</v-alert>
        </template>
        <template v-else-if="loading">
          <v-progress-circular indeterminate></v-progress-circular>
        </template>
        <template v-else>
          <iframe v-for="trailer in videos" :key="trailer.id" :src="`https://www.youtube.com/embed/${trailer.key}`" title="description" width="100%" height="900"></iframe>
        </template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" variant="outlined" @click="isActive = false">
            <v-icon mdi-close></v-icon> Close
          </v-btn>
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
      isActive: false,
      loading: false,
    };
  },
  methods: {
    async fetchVideo() {
      this.loading = true;
      try {
        const apiKey = process.env.TMDB_API_KEY; // Replace with your API key retrieval method
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        this.videos = data.results;
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    '$route': {
      handler: 'fetchVideo',
      immediate: true,
    },
  },
};
</script>

<style></style>
