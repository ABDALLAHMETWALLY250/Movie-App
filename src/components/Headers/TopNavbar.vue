<template>
  <v-layout class="mb-15">
    <v-app-bar
      style="border-bottom: 2px solid #fff; background-color: rgb(17 24 39)"
    >
      <v-app-bar-title
        @click="$router.push('/')"
        style="font-size: 25px; font-weight: 600; color: #fff; cursor: pointer"
      >
        <v-icon size="large">mdi-play-circle-outline</v-icon>
        LEADER MOVIE</v-app-bar-title
      >
      <v-spacer></v-spacer>
      <!-- Search -->
      <div class="search">
        <div class="search-box w-100">
          <div class="search-field w-100">
            <input placeholder="Search..." class="input" type="text" />
            <div class="search-box-icon">
              <button class="btn-icon-content">
                <i class="search-icon">
                  <svg version="1.1" viewBox="0 0 512 512">
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      fill="#fff"
                    ></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Search -->

      <v-spacer></v-spacer>
      <!-- Links Buttons -->

      <v-btn>
        <router-link class="router" to="/">
          <v-icon size="large">mdi-video</v-icon> movie
        </router-link></v-btn
      >

      <v-btn>
        <router-link class="router" to="/actors">
          <v-icon size="large">mdi-account</v-icon> actors
        </router-link></v-btn
      >
      <!-- Form Comp -->
      <FormDialog />
      <!-- EndForm Comp -->
      <!-- End Links Buttons -->
      <!-- Profile Section -->
      <v-menu
        v-if="$store.state.email && $store.state.fullName && $store.state.image"
        min-width="200px"
        rounded
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
              <v-avatar :image="$store.state.image" color="brown" size="large">
              </v-avatar>
              <h3>{{ $store.state.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ $store.state.email }}
              </p>

              <v-divider class="my-3"></v-divider>
              <v-btn class="profile" rounded variant="text" @click="Logout">
                Logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
      <!-- End Profile Section -->
    </v-app-bar>
  </v-layout>
</template>

<script>
import FormDialog from "@/components/Content/FormDialog.vue";

export default {
  components: {
    FormDialog,
  },
  methods: {
    Logout() {
      localStorage.clear("userData");
      location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
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
.v-toolbar-title__placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.search {
  --input-line: #cccccc;
  --input-text-color: #808080;
  --input-text-hover-color: transparent;
  --input-border-color: #808080;
  --input-border-hover-color: #999999;
  --input-bg-color: #333333;
  --search-max-width: 250px;
  --search-min-width: 150px;
  --border-radius: 5px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.search-box {
  max-width: var(--search-max-width);
  min-width: var(--search-min-width);
  height: 35px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background: var(--input-bg-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: var(--transition-cubic-bezier);
}

.search-box:hover {
  border-color: var(--input-border-hover-color);
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: -5px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: var(--input-line);
  background: var(--input-bg-color);
  border-right: 2px solid var(--input-border-color);
  outline: none;
}

.input::-webkit-input-placeholder {
  color: var(--input-text-color);
}

.input::-moz-input-placeholder {
  color: var(--input-text-color);
}

.input::-ms-input-placeholder {
  color: var(--input-text-color);
}

.input:focus::-webkit-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-moz-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-ms-input-placeholder {
  color: var(--input-text-hover-color);
}

/*Search button*/
.search-box-icon {
  width: 52px;
  height: 35px;
  position: absolute;
  top: -6px;
  right: -21px;
  background: transparent;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.search-box-icon:hover {
  background: var(--input-border-color);
}

.btn-icon-content {
  width: 52px;
  height: 35px;
  top: -6px;
  right: -21px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
  opacity: 0.4;
}

.btn-icon-content:hover {
  opacity: 0.8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 7px;
  right: 15px;
}
.profile {
  border-radius: 20px;
  text-align: center;

  &:hover {
    background-color: red;
    cursor: pointer;
    color: white;
  }
}
</style>
