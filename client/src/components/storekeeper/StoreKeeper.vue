<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color = blue
      dark
    >
     <v-toolbar-title>
       Store Keeper
     </v-toolbar-title>



      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-tabs align-with-title>
          <v-tab>Accept and Giveissue</v-tab>
          <v-tab>View property</v-tab>
          <v-tab>Take property</v-tab>
          
          <v-menu offset-y >
          <template v-slot:activator="{ on, attrs }">
          <v-tab  v-bind="attrs" v-on="on" >
            
                Manage
                <v-icon
          dark
          right
        >
          chevron-down
        </v-icon></v-tab>
          </template>

          <v-list>
          <v-list-item
          v-for="(manage, index) in manages"
          :key="index"
          >
          <v-list-item-title>{{manage.title }}</v-list-item-title>
          </v-list-item>
          </v-list>
          </v-menu>
           </v-tabs>
      </v-toolbar-items>


      <div class="text-right">
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on" >
           <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Storekeeper">
          </v-avatar>
      </template>

         <v-list>
         <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list>
        </v-menu>
    </div>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      items: [
        { title: 'Profile' },
        { title: 'Logout' }
      ],
      manages: [
        {title:'Add Property'},
        {title:'Edit property'},
        {title:'remove Property'}
      ],
    }),
  }
</script>