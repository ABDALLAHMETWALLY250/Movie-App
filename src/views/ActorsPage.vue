<template>
  <LoadingComp />

  <v-container style="margin-top: 5em">
    <h4 class="text-yellow-darken-3 text-h5">Popular Actors</h4>
  </v-container>

  <v-container>
    <v-row>
      <v-col v-for="img in images" :key="img.id" cols="12" md="4" sm="6">
        <router-link
          class="route"
          :to="{ name: 'Actors-Details', params: { id: img.id } }"
        >
          <v-img
            cover
            width="400"
            :src="
              `https://image.tmdb.org/t/p/w300/${img.profile_path}` !==
              `https://image.tmdb.org/t/p/w300/null`
                ? `https://image.tmdb.org/t/p/w300/${img.profile_path}`
                : `https://placehold.co/300x400`
            "
            :lazy-src="
              `https://image.tmdb.org/t/p/w300/${img.profile_path}` !==
              `https://image.tmdb.org/t/p/w300/null`
                ? `https://image.tmdb.org/t/p/w300/${img.profile_path}`
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
          <p class="text-white my-2">Name: {{ img.name }}</p>
          <p class="text-white my-2">
            Known For Department: {{ img.known_for_department }}
          </p>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoadingComp from "@/components/LoadingComp.vue";

export default {
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjJiNWM3YWMyMDZmNGJhMWY1NjI1ZTE0MzNjZWY0MiIsInN1YiI6IjY1MDU5YTAwM2NkMTJjMDE0ZWJlOTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRoNKxC_8eeVrlNIY2IrHDmc6RFfYz8vR5UvBot5kUg",
      },
    };

    fetch(`https://api.themoviedb.org/3/person/popular?page=1`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log("actor results", response.results);
        this.images = response.results;
      })
      .catch((err) => console.error(err));
  },
  components: {
    LoadingComp,
  },
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
