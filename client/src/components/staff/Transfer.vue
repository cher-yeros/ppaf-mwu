<template>
<div>
  <s-app-bar></s-app-bar>
  <div class="main" app>
    <v-btn   x-large @click="dialog=true">
        Ask to transfer
    </v-btn>
  </div>
  <v-row justify="center">

   
  </v-row>

    <Form @closed="show = false" v-if="show"></Form>
</div>
</template>

<script>
import AppBar from './AppBar.vue';


export default {
  component: { AppBar },
  data() {

      return {
          show: false,
          dialog: false,
          name:'app',

      }
    },
    methods : {
      
    }
  }

</script>

<style>

</style>