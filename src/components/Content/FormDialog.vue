<template>
  <v-row style="flex: 0.8" justify="center">
    <v-dialog v-model="dialog" persistent width="1000">
      <template v-slot:activator="{ props }">
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
                  v-model="$store.state.fullName"
                  required
                ></v-text-field>
                {{ $store.state.fullName }}
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Email"
                  v-model="$store.state.email"
                  required
                ></v-text-field>
                {{ $store.state.email }}
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label=" Your Image as Link"
                  v-model="$store.state.image"
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
  }),
  methods: {
    save() {
      if (
        this.$store.state.email &&
        this.$store.state.fullName &&
        this.$store.state.image
      ) {
        this.dialog = false;
      }
    },
  },
};
</script>
