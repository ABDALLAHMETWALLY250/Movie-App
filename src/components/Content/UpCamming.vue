<template>
  <v-container class="my-3">
    <h4 class="text-yellow-darken-3 text-start text-h5">UpCaming Movies</h4>
  </v-container>

  <v-container class="my-3">
    <v-row>
      <v-col>
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :spaceBetween="0"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="false"
          :loop="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide class="w-75" v-for="poster in posters" :key="poster.id">
            <v-card class="mx-auto">
              <img
                :src="`https://image.tmdb.org/t/p/w300/${poster.backdrop_path}`"
                class="w-100"
                style="object-fit: cover"
              />
              <v-card-title class="w-100 bg-blue text-white text-center">
                <router-link
                  class="router"
                  :to="{ name: 'Movie', params: { id: poster.id } }"
                >
                  <p>
                    {{ poster.title }}
                  </p>
                </router-link>
              </v-card-title>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
export default {
  data() {
    return {
      posters: [],
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
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log("up", response.results);
          this.posters = response.results;
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.fetchImage();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
.router {
  color: #fff;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
}
</style>
