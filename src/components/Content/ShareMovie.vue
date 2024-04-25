<template>
  
  <v-container style="margin-top: 0.5em">
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id" cols="12" md="4" sm="6">
        <router-link
          class="route"
          :to="{ name: 'Movie', params: { id: movie.id } }"
        >
          <v-card style="background: #111827" flat max-width="400">
            <v-img
              cover
              :src="
                `https://image.tmdb.org/t/p/w300/${movie.poster_path}` !==
                `https://image.tmdb.org/t/p/w300/null`
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : `https://placehold.co/300x400`
              "
              :lazy-src="
                `https://image.tmdb.org/t/p/w300/${movie.poster_path}` !==
                `https://image.tmdb.org/t/p/w300/null`
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
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
            <v-card-title class="text-white text-h5 px-0 pb-0 text-start">
              {{ movie.title }}
            </v-card-title>

            <v-card-subtitle class="text-white px-0 text-start">
              {{ movie.overview }}
            </v-card-subtitle>

            <span class="text-white font-weight-thin text-start w-100 d-block">
              <v-icon size="15" color="yellow-accent-4">mdi-star</v-icon>
              {{ Math.ceil((movie.vote_average / 10) * 100) }}% |
              {{ movie.release_date }}</span
            >
            <br />
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["movies"],
};
</script>
<style scoped lang="scss">
.route {
  text-decoration: none;
  text-align: -webkit-center;
}
.router {
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
}
</style>
