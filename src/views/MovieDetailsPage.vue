<template>
  <LoadingComp v-if="loding" />
  <div v-else>
    <v-container>
      <v-row class="flex-lg">
        <v-col cols="12" md="5" sm="6">
          <img
            :src="
              `https://image.tmdb.org/t/p/w500/${movies.poster_path}` !==
              `https://image.tmdb.org/t/p/w500/null`
                ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                : `https://placehold.co/300x400`
            "
            class="img_detail"
          />
        </v-col>
        <v-spacer />
        <v-col cols="12" md="6" sm="6" class="text-white">
          <h2 class="my-5">
            {{ movies.title }}

            <span style="font-size: 13px; font-weight: 400"
              >({{ movies.tagline }})</span
            >
          </h2>

          <div class="font-weight-thin my-5">
            <v-icon size="small">mdi-calendar</v-icon> Date:
            {{ movies.release_date }}
          </div>

          <div class="font-weight-thin my-5">
            <v-icon size="small">mdi-web</v-icon> Lang:
            {{ movies.original_language }}
          </div>

          <div class="font-weight-thin my-5">
            <v-icon size="small">mdi-eye</v-icon> Watches:
            {{ movies.vote_count }}
          </div>

          <span
            v-for="country in movies.production_countries"
            :key="country.id"
            class="font-weight-thin my-5"
          >
            <span> {{ country.name + "," }}</span>
          </span>

          <br />
          <br />

          <span
            class="my-5"
            v-for="(item, index) in movies.genres"
            :key="index"
          >
            <span class="font-weight-thin"> {{ item.name + "," }} </span>
          </span>

          <span class="d-flex my-5">
            Rating:
            <v-rating
              :model-value="Math.ceil((movies.vote_average / 10) * 100)"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <div class="text-grey ms-4">
              {{ Math.ceil((movies.vote_average / 10) * 100) }}%
            </div>
          </span>

          <div class="my-5">
            {{ movies.overview }}
          </div>
          <v-card-actions class="mt-5">
            <Popub class="mx-3" />
            <v-btn variant="outlined">
              <v-icon>mdi-heart</v-icon> Favourite</v-btn
            >
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
    <hr />
    <v-container>
      <ProductionCompanies
        :production_companies="movies.production_companies"
      />
    </v-container>
    <hr />
    <v-container>
      <Images />
    </v-container>
    <hr />
    <v-container>
      <SimilarMovie />
    </v-container>
  </div>
</template>

<script>
import ProductionCompanies from "../components/Content/ProductionCompanies.vue";
import Images from "../components/Content/ImagesComp.vue";
import SimilarMovie from "../components/Content/SimilarMovie.vue";
import Popub from "../components/Content/PopapVide.vue";
import LoadingComp from "@/components/LoadingComp.vue";
export default {
  data() {
    return {
      movies: {
        videos: [],
      },
      loding: true,
    };
  },

  methods: {
    fetchMovieDetail() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjJiNWM3YWMyMDZmNGJhMWY1NjI1ZTE0MzNjZWY0MiIsInN1YiI6IjY1MDU5YTAwM2NkMTJjMDE0ZWJlOTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SRoNKxC_8eeVrlNIY2IrHDmc6RFfYz8vR5UvBot5kUg",
        },
      };
      fetch(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          this.movies = response;
          // console.log("movie-detail", response);
          this.loding = false;
        })
        .catch((err) => console.error(err));
    },
  },
  watch: {
    $route() {
      this.fetchMovieDetail();
    },
  },
  mounted() {
    this.fetchMovieDetail();
  },
  components: {
    ProductionCompanies,
    Images,
    SimilarMovie,
    Popub,
    LoadingComp,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .flex-lg {
    margin-top: 5em !important;
  }
  .img_detail {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .flex-lg {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    margin-top: 5em;
  }
  .img_detail {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
@media screen and (min-width: 1024px) {
  .flex-lg {
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    margin-top: 5em;
  }
  .img_detail {
    width: 420px;
    border-radius: 10px;
  }
}
.link {
  text-decoration: none;
  color: #fff;
}
</style>
