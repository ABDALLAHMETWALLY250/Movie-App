import { createStore } from "vuex";

export default createStore({
  state: {
    fullName: "",
    email: "",
    image: "",
  },
  mutations: {
    setFullName(state, fullName) {
      state.fullName = fullName;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setImage(state, image) {
      state.image = image;
    },
  },
  actions: {
    // You can define actions to update state here if needed
  },
  plugins: [
    // Vuex plugin to save state to local storage
    (store) => {
      // Triggered whenever the state changes
      store.subscribe((mutation, state) => {
        // Save the state to local storage
        localStorage.setItem("userData", JSON.stringify(state));
      });
    },
  ],
});
