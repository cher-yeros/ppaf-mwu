<template>
  <v-toolbar color="blue" dark >
  <v-toolbar-title class="brand">Storekeeper</v-toolbar-title>
  <v-spacer></v-spacer>

  <v-toolbar-items>
  <router-link to="/sk/agissue">
    <v-btn class="blue elevation-0 active" text color=white>Accept and Giveissue</v-btn>
  </router-link>

  <router-link to="/sk/viewp">
    <v-btn class="blue elevation-0 active" text color=white>View property</v-btn>
  </router-link>

  <router-link to="/sk/takep">
    <v-btn class="blue elevation-0 active" text color=white>Take property</v-btn>
  </router-link>
  
  <router-link to="/sk/managep">
    <v-btn class="blue elevation-0 active" text color=white>Manage property</v-btn>
  </router-link>
  
  
  
  
  </v-toolbar-items>

     <v-spacer></v-spacer>
     <div class="text-right">
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on" >
           <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Storekeeper">
          </v-avatar>
      </template>

         <v-list>
         <v-list-item>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
         </v-list>
        </v-menu>
       </div>
       </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>
  button {
  height: 64px !important;
}
</style>

