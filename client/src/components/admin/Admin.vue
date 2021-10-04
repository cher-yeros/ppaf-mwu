<template>
  <v-toolbar
  color="blue"
  dark
>
<v-app-bar-nav-icon></v-app-bar-nav-icon>
<v-toolbar-title class="brand">Spun fInber</v-toolbar-title>
<v-spacer></v-spacer>

<v-toolbar-items>
  
  <v-btn class="blue elevation-0 active" text color=white>Manage Property</v-btn>
  <v-btn class="blue elevation-0 active" text color=white>Manage Employee</v-btn>
  <v-btn class="blue elevation-0 active" text color=white>Show Transaction</v-btn>
  <v-btn class="blue elevation-0 active" text color=white>Return</v-btn>
  <v-btn class="blue elevation-0 active" text color=white>Leave Issue</v-btn>
</v-toolbar-items>

      


    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-avatar>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUz5EWKDu-QHOR3ym0eWBSQenc69_kODInRA&usqp=CAU"
        alt="Account"
        v-bind="attrs"
        v-on="on"
      >
    </v-avatar>
        
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-icon left >account</v-icon>
            Profile
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title>
             <v-icon left >logout</v-icon>
             Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>