<template>
  <v-row style="flex: 0.8" justify="center">
    <v-dialog v-model="dialog" persistent width="1000">
      <template v-if="!login" v-slot:activator="{ props }">
        <v-btn
          :class="{
            'd-none':
              $store.state.email && $store.state.fullName && $store.state.image,
          }"
          color="white"
          v-bind="props"
        >
          <v-icon>mdi-login</v-icon> LogIn
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Full Name"
                  v-model="fullName"
                  required
                  type="text"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Email"
                  v-model="email"
                  required
                  type="email"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Your Image as Link"
                  v-model="image"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    fullName: "",
    email: "",
    image: "",
  }),
  computed: {
    login() {
      return JSON.parse(localStorage.getItem("userData")) ? true : false;
    },
  },
  methods: {
    save() {
      if (this.email && this.fullName && this.image) {
        // Call mutation functions to update Vuex store state
        this.$store.commit("setFullName", this.fullName);
        this.$store.commit("setEmail", this.email);
        this.$store.commit("setImage", this.image);

        // Close dialog
        this.dialog = false;
      } else {
        this.dialog = true;
      }
    },
    ferchUserData() {
      if (JSON.parse(localStorage.getItem("userData"))) {
        this.fullName = JSON.parse(localStorage.getItem("userData")).fullName;
        this.email = JSON.parse(localStorage.getItem("userData")).email;
        this.image = JSON.parse(localStorage.getItem("userData")).image;
        this.$store.commit("setFullName", this.fullName);
        this.$store.commit("setEmail", this.email);
        this.$store.commit("setImage", this.image);
        // console.log("done");
        // console.log(this.fullName, "wee");
      }
    },
  },
  mounted() {
    this.ferchUserData();
  },
};
</script>
