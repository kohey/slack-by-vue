<template>
  <div class="container">

  </div>
</template>

<script>
import {firebase } from "~/plugins/firebase.js";
export default {
  mounted(){
    console.log(this.$store.getters.isAuthenticated)
  },
  methods:{

  }
}
</script>