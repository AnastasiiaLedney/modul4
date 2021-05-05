<template>
  <div>
    <span v-if="signIn">
      Ви увійшли як <b>{{ login }}</b>
      <input type="button" value="вийти" @click="signOut" />
    </span>
    <router-link to="/signin" v-else> Увійти </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import auth from "@/auth";

export default {
  name: "SignInStatusPanel",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["login", "signIn"]),
  },
  methods: {
    signOut() {
      auth.signOut();
    },
  },
};
</script>
<style scoped>
div {
  position: absolute;
  right: 30px;
  display: inline-block;

}
.button {
  transition-duration: 0.4s;
}

.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
}
</style>
