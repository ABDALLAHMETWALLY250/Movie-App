<template>
  <v-layout>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-app-bar
      style="border-bottom: 2px solid #fff; background-color: rgb(17 24 39)"
      prominent
    >
      <v-toolbar-title
        style="cursor: pointer"
        @click="$router.push('/')"
        class="text-white"
      >
        <v-icon size="large">mdi-play-circle-outline</v-icon>
        LEADER MOVIE
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        class="text-white"
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- Form Comp -->
      <FormDialog />
      <!-- EndForm Comp -->
      <!-- Profile Section -->
      <v-menu
        min-width="200px"
        rounded
        v-if="$store.state.email && $store.state.fullName && $store.state.image"
      >
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar :image="$store.state.image" color="brown" size="large">
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar
                :image="
                  $store.state.image
                    ? $store.state.image
                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAYFBMVEUiLTqzusC2vcO5wMYfKjgYJTMVIjEbJzURHy88RVCpsLaZoKd9hIyco6q8w8kAFSdcZG0zPUlianIIGip2fYVsc3yNlJuDipIpM0BMVV+Tm6JTW2QADSKjqrFHT1lweIBr0TcPAAAEdElEQVR4nO2b2XKjOhBAQTuyjdk3G/P/f3khJJMw17akhhYzNZyqVCp5OtVqtbYmCA4ODg4ODg4ODg4ODmxgks9ItrfKCBNXGbVZOQxDmbWRvIpdrRhnUdbpMCQzYai7LBr/u5dP3gwXGo8ePyAxOQ1NvocTE+k5JEudTykSFqnwLiT5ENInOjM0zHyHSUT9a58Pp0vKfQrds/DZeC3GTidXbz6M17HBZyIuvCWTqt+P2K8wFerPEhqT6exFSZW2QqNS4mHg+M2U0wtaiS3EpIvPOOMUdl2yT6LPccNOJdk6+Uwgj9v94pRFI6S7Ywrxm01pXBI/MJcTXrmGaAxSjVgBWOTsMxHhTTfhUBy/oRlekK7OeT1BuhxLiAUAnwmGNWyOC8h3kNBKkhiARgNWIokaaFRjrSSsAxpVaAsJaKqNRhcsoaYHGvXNYWQy0v+OETiz0UZNAvYiH0Yd1ioCrpAV1p4NvIqgnW15AjRKsGLEUpBQSPA2kaoHGWm8I1vueHycoTXaHjKQoC0bRUujKZE0wEiniEd/SEUiFeaNjYz+tDMt5Nx/QT33A4okyZBvkdnJTYmcsG+0eOuWSXGLftF+7VyqJK3wr9lZ5FCTiEa8F/mFSuzHLU68XGgL+xt2tMPsEhac7JToJfD0pMXsDiXjhh/9ev0LmWpzlKhOvQlNSheTEun9PvnJxvQG6XHIZpga6OtkInRAfw/5P+r2Mpmovnl661vCVfHUieoz9/+4PiPSsyaLN//xL31Od+zUYHmQVZrG9KNJY/ytq4zt0hDxw4nL4JHVVXfqqjqJAr5b08hPpMjzXI0/3POEPzg42BPGJBdfcIn2lGblIoWSTRo9bklWTmTZ7RGljVRihzZEJvMrf5R11Y8LG/1mXNb6ri7b5pr7LN5MsSipL6MKedJaNzci9tOS4mePxNQ9HU6avtmvzXsSGp6K9I4uxXlU9PHTpsMnO0kS90UkMRsQRN522hScpRTV3U0h7ZeYSksdA279Yj2kGIMngkLDrvynC4ki2HrsuBgsDo2voXoQWzoxcTOeGE1hIn2y3YZONLVTOr9wolW60ZlJJG96ep2cwmyLQi7z8/r4fEFrtXrkjE3Gjkp9tDLB1QM85Z9DdLsqmVQCKIkGJZqtUMrLjXVmBvB7myrd32VsiEtglFS59Yh9QQaQkrptOcmWUMg9N2+NrfwrIDfnIsCajaf9b0ba+ZpSAjvErJVcX7lyUHeoC3RwelWSD2Sf0LVLUji+NIKMLg438DlSaVwS29duWKOBO/atCfkZO61nrBtKWICfRJ9KjV2QlKcQWX+64SuLJuwySWS+QjQGqbRZ3u6oC9pvaIumEhn5C9EYpMhcuNWGhyEz5GwxbMBWVaCRuXUb+JEKnIdptvmcaROx8fOWK7CbFwrpTNuku7/y+InBiDW+hUzfScF6MNdgagMWmXcjwwc3ovBudH4fI+61Yn8Y1e/XEQ5snF9h1L03gn5csMbo/VyDfuy0wuj0VmgPI8Naexj9FUb/AZiARF0Wth4IAAAAAElFTkSuQmCC'
                "
                size="large"
              >
              </v-avatar>
              <h3>{{ $store.state.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ $store.state.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn class="profile" rounded variant="text">
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn class="profile" rounded variant="text"> Disconnect </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
      <!-- End Profile Section -->
    </v-app-bar>
    <!-- Drawer Nav -->
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-avatar
        :image="
          $store.state.image
            ? $store.state.image
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAYFBMVEUiLTqzusC2vcO5wMYfKjgYJTMVIjEbJzURHy88RVCpsLaZoKd9hIyco6q8w8kAFSdcZG0zPUlianIIGip2fYVsc3yNlJuDipIpM0BMVV+Tm6JTW2QADSKjqrFHT1lweIBr0TcPAAAEdElEQVR4nO2b2XKjOhBAQTuyjdk3G/P/f3khJJMw17akhhYzNZyqVCp5OtVqtbYmCA4ODg4ODg4ODg4ODmxgks9ItrfKCBNXGbVZOQxDmbWRvIpdrRhnUdbpMCQzYai7LBr/u5dP3gwXGo8ePyAxOQ1NvocTE+k5JEudTykSFqnwLiT5ENInOjM0zHyHSUT9a58Pp0vKfQrds/DZeC3GTidXbz6M17HBZyIuvCWTqt+P2K8wFerPEhqT6exFSZW2QqNS4mHg+M2U0wtaiS3EpIvPOOMUdl2yT6LPccNOJdk6+Uwgj9v94pRFI6S7Ywrxm01pXBI/MJcTXrmGaAxSjVgBWOTsMxHhTTfhUBy/oRlekK7OeT1BuhxLiAUAnwmGNWyOC8h3kNBKkhiARgNWIokaaFRjrSSsAxpVaAsJaKqNRhcsoaYHGvXNYWQy0v+OETiz0UZNAvYiH0Yd1ioCrpAV1p4NvIqgnW15AjRKsGLEUpBQSPA2kaoHGWm8I1vueHycoTXaHjKQoC0bRUujKZE0wEiniEd/SEUiFeaNjYz+tDMt5Nx/QT33A4okyZBvkdnJTYmcsG+0eOuWSXGLftF+7VyqJK3wr9lZ5FCTiEa8F/mFSuzHLU68XGgL+xt2tMPsEhac7JToJfD0pMXsDiXjhh/9ev0LmWpzlKhOvQlNSheTEun9PvnJxvQG6XHIZpga6OtkInRAfw/5P+r2Mpmovnl661vCVfHUieoz9/+4PiPSsyaLN//xL31Od+zUYHmQVZrG9KNJY/ytq4zt0hDxw4nL4JHVVXfqqjqJAr5b08hPpMjzXI0/3POEPzg42BPGJBdfcIn2lGblIoWSTRo9bklWTmTZ7RGljVRihzZEJvMrf5R11Y8LG/1mXNb6ri7b5pr7LN5MsSipL6MKedJaNzci9tOS4mePxNQ9HU6avtmvzXsSGp6K9I4uxXlU9PHTpsMnO0kS90UkMRsQRN522hScpRTV3U0h7ZeYSksdA279Yj2kGIMngkLDrvynC4ki2HrsuBgsDo2voXoQWzoxcTOeGE1hIn2y3YZONLVTOr9wolW60ZlJJG96ep2cwmyLQi7z8/r4fEFrtXrkjE3Gjkp9tDLB1QM85Z9DdLsqmVQCKIkGJZqtUMrLjXVmBvB7myrd32VsiEtglFS59Yh9QQaQkrptOcmWUMg9N2+NrfwrIDfnIsCajaf9b0ba+ZpSAjvErJVcX7lyUHeoC3RwelWSD2Sf0LVLUji+NIKMLg438DlSaVwS29duWKOBO/atCfkZO61nrBtKWICfRJ9KjV2QlKcQWX+64SuLJuwySWS+QjQGqbRZ3u6oC9pvaIumEhn5C9EYpMhcuNWGhyEz5GwxbMBWVaCRuXUb+JEKnIdptvmcaROx8fOWK7CbFwrpTNuku7/y+InBiDW+hUzfScF6MNdgagMWmXcjwwc3ovBudH4fI+61Yn8Y1e/XEQ5snF9h1L03gn5csMbo/VyDfuy0wuj0VmgPI8Naexj9FUb/AZiARF0Wth4IAAAAAElFTkSuQmCC'
        "
        size="180"
      ></v-avatar>
      <h3 class="text-blue text-center my-4">
        {{ $store.state.fullName ? $store.state.fullName : "Name" }}
      </h3>
      <v-list class="text-center my-3">
        <v-btn flat>
          <router-link class="router" to="/">
            <v-icon size="large">mdi-video</v-icon> movie
          </router-link></v-btn
        >
      </v-list>

      <v-list class="text-center my-3">
        <v-btn flat>
          <router-link class="router" to="/actors">
            <v-icon size="large">mdi-account</v-icon> actors
          </router-link></v-btn
        >
      </v-list>
    </v-navigation-drawer>
    <!-- End Drawer Nav -->
  </v-layout>
</template>

<script>
import FormDialog from "@/components/Content/FormDialog.vue";

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  components: {
    FormDialog,
  },
};
</script>

<style lang="scss" scoped>
.router {
  text-decoration: none;
}
.profile {
  padding: 8px;
  border-radius: 20px;
  text-align: center;

  &:hover {
    background-color: #1d79c2;
    padding: 8px;
    cursor: pointer;
    color: white;
  }
}
</style>
