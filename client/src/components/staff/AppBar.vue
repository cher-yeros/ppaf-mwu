<template>
  
    <v-toolbar 
    color= blue dark>

      

      <v-toolbar-title>Staff</v-toolbar-title>
         <v-spacer></v-spacer>
         
      <v-toolbar-items>
        <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          class="blue elevation-0 active" text color=white
          v-bind="attrs"
          v-on="on"
        >
           Property Transaction
        </v-btn>
      </template>
      <v-list>
        <router-link to="/s/Issue"> 
          <v-list-item>
            <v-list-item-title>Issue property</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/s/Borrow"> 
          <v-list-item>
            <v-list-item-title>Borrow property</v-list-item-title>
          </v-list-item>
        </router-link>
       <router-link to="/s/Transfer"> 
           <v-list-item>
            <v-list-item-title>Transfer property</v-list-item-title>
          </v-list-item> 
        </router-link>
      <router-link to="/s/Leave_Issue"> 
        <v-list-item>
          <v-list-item-title>Leave Issue</v-list-item-title>
        </v-list-item> 
      </router-link>
      <router-link to="/s/Show_status"> 
        <v-list-item>
          <v-list-item-title>Show status</v-list-item-title>
        </v-list-item> 
      </router-link>

      </v-list>
    </v-menu>
           <!-- <v-btn class="blue elevation-0 active" text color=white>Isuee property</v-btn>
           <v-btn class="blue elevation-0 active" text color=white>Borrow property</v-btn>
           <v-btn class="blue elevation-0 active" text color=white>Transefer property</v-btn>
          <v-btn class="blue elevation-0 active" text color=white>Return property</v-btn>
          <v-btn class="blue elevation-0 active" text color=white>Request purchase</v-btn>
          <v-btn class="blue elevation-0 active" text color=white>Leave Issue</v-btn> -->
      
      
      </v-toolbar-items>
      <v-spacer></v-spacer>
     <v-menu offset-y>
     
  <template v-slot:activator="{ on, attrs }">
   
   <v-spacer></v-spacer>
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

<style scoped>

</style>