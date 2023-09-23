<template>
  <h2 class="text-white text-h4 mb-3">Production Companies</h2>
  <v-container>
    <v-row>
      <v-col
        :key="production_companie.id"
        v-for="production_companie in production_companies"
        cols="12"
        sm="6"
        md="6"
      >
        <v-img
          contain
          :src="
            `https://image.tmdb.org/t/p/w300/${production_companie.logo_path}` !==
            `https://image.tmdb.org/t/p/w300/null`
              ? `https://image.tmdb.org/t/p/w300/${production_companie.logo_path}`
              : `https://placehold.co/300x400`
          "
          :lazy-src="
            `https://image.tmdb.org/t/p/w300/${production_companie.logo_path}` !==
            `https://image.tmdb.org/t/p/w300/null`
              ? `https://image.tmdb.org/t/p/w300/${production_companie.logo_path}`
              : `https://placehold.co/300x400`
          "
          aspect-ratio="1"
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
        <p class="text-white my-2">{{ production_companie.name }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    production_companies: {
      required: true,
    },
  },
};
</script>
