<template>
<div>
   <sk-app-bar ></sk-app-bar>
   <v-main >
   <br>
    <div>
      <div class="main" app>
      <v-btn rounded x-large color='red' @click="showForm">
        Add
      </v-btn>
      </div>
      <property-form @closed="show = false" v-if="show"></property-form>
  </div>
  
<br>
   
  
   </v-main>
</div>
</template>
 
<style>

</style>

 

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