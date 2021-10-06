<template>
<div>
  <app-bar></app-bar>
  <div class="main" app>
    <v-btn @click="showForm">
        Add
    </v-btn>
  </div>

    <property-form @closed="show = false" v-if="show"></property-form>
</div>
</template>

<script>
import AppBar from './AppBar';
import FormDialog from './FormProperty.vue';

export default {
  component: { AppBar,FormDialog },
  data() {
      return {
          show: false
      }
  },
  methods: {
      showForm() {
          this.show = !this.show
      }
  }
  
}
</script>

<style>

</style>