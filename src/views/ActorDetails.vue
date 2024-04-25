<template>
  <LoadingComp v-if="loading" />
  <div v-else>
    <v-container>
      <v-row class="flex-lg">
        <v-col cols="12" md="5" sm="12">
          <img
            :src="
              `https://image.tmdb.org/t/p/w500/${movies.profile_path}` !==
              `https://image.tmdb.org/t/p/w500/null`
                ? `https://image.tmdb.org/t/p/w500/${movies.profile_path}`
                : `https://placehold.co/300x400`
            "
            class="img_detail"
          />
        </v-col>
        <v-spacer />
        <v-col cols="12" md="6" sm="12" class="text-white">
          <h2 class="my-5">
            {{ movies.name }}

            <span style="font-size: 13px; font-weight: 400">{{
              movies.known_for_department
            }}</span>
          </h2>

          <div class="font-weight-thin my-5">
            <v-icon size="small">mdi-calendar</v-icon> Date:
            {{ movies.birthday }}
          </div>

          <div class="font-weight-thin my-5">
            <v-icon size="small">mdi-home</v-icon> Lang:
            {{ movies.place_of_birth }}
          </div>

          <div class="font-weight-thin my-5">
            <v-icon size="small">mdi-eye</v-icon> Watches:
            {{ movies.popularity }}
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
              :model-value="Math.ceil((movies.popularity / 10) * 100)"
              color="amber"
              density="compact"
              half-increments
              readonly
              size="small"
            ></v-rating>
            <div class="text-grey ms-4">
              {{ Math.ceil(movies.popularity / 10) }}%
            </div>
          </span>

          <div class="my-5">
            <p class="bio">{{ movies.biography }}</p>
          </div>
          <v-card-actions class="mt-5">
            <div>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="text"
              ></v-btn>
            </div>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoadingComp from "@/components/LoadingComp.vue";

export default {
  data() {
    return {
      movies: {
        videos: [],
      },
      loading: true,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
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
    fetch(
      `https://api.themoviedb.org/3/person/${this.$route.params.id}`,

      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.movies = response;
        // console.log("actor-detail", response);
        this.loading = false;
      })
      .catch((err) => console.error(err));
  },
  components: {
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
    height: 85vh;
    object-fit: contain;
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
    
  }
}
.link {
  text-decoration: none;
  color: #fff;
}
.bio {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: calc(var(--line-height) * 5em);
  line-height: var(--line-height);
  --line-height: 1.5;
}
</style>
