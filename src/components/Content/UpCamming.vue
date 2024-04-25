<template>
  <v-container class="my-3">
    <h4 class="text-yellow-darken-3 text-start text-h5">Coming Movies</h4>
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
          :navigation="true"
          class="mySwiper"
        >
          <swiper-slide class="w-75" v-for="slide in posters" :key="slide">
            <v-card class="mx-3">
              <img
                :src="`https://image.tmdb.org/t/p/w300/${slide.backdrop_path}`"
                class="w-100"
                style="object-fit: cover"
              />
              <v-card-title class="w-100 bg-blue text-white text-center pa-1">
                <router-link
                  class="router"
                  :to="{ name: 'Movie', params: { id: slide.id } }"
                >
                  <p class="title">
                    {{ slide.title }}
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
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

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
      modules: [EffectCoverflow, Pagination, Autoplay, Navigation],
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
img {
  border-radius: unset !important;
}
@media screen and (max-width: 767px) {
  .title {
    font-size: 1rem;
  }
  .w-75 {
    width: 100% !important;
  }
}
</style>
