<template>
  <SideBar class="lg-none sm md" />
  <TopNavbar class="lg sm-none md-none" />
  <router-view />
</template>
<script>
import SideBar from "./components/Headers/SideBar";
import TopNavbar from "./components/Headers/TopNavbar";
export default {
  components: {
    SideBar,
    TopNavbar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
.v-img {
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      background-color: rgba($color: #000, $alpha: 0.4);
      color: #fff;
      padding: 8px 10px;
    }
  }
}
</style>
