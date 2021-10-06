<template>
  
<nav>
  <v-toolbar
  color="blue"
  dark
  fixed
>
<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
<router-link to="/sa" class="brand" >
  <v-toolbar-title>Super Admin</v-toolbar-title>
</router-link>
<v-spacer></v-spacer>

<v-toolbar-items>
  
  <router-link to="/sa/properties">
    <v-btn class="button blue elevation-0 active" text color=white>Log</v-btn>
  </router-link>
  <router-link to="/sa/employees">
    <v-btn class="button blue elevation-0 active" text color=white>Employees</v-btn>
  </router-link>
  <router-link to="/sa/transaction">
    <v-btn class="button blue elevation-0 active" text color=white>Transaction</v-btn>
  </router-link>

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
    <router-link to="/sa/profile">
        <v-list-item>
            <v-list-item-title>
                <v-icon left >mdi-account</v-icon>
                Profile
            </v-list-item-title>
        </v-list-item>
    </router-link>
    <v-divider></v-divider>
    <v-list-item @click="logout">
      <v-list-item-title>
          <v-icon left >mdi-logout</v-icon>
          Logout</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>
</v-toolbar>
<!--
<v-navigation-drawer
      app
      v-model="drawer"
      dark
      class="blue"
      permanent
      left
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-navigation-drawer
        
        app
      v-model="drawer"
      dark
      class="blue"
      left
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</nav>

</template>

<script>
export default {
data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-home" },
        { title: "Account", icon: "mdi-account" },
        { title: "Admin", icon: "mdi-gavel" },
      ],
    }
  },
  methods: {
      logout(e) {
          console.log("Will Logout")
      }
  }
}
</script>

<style scoped>
a {
  color: white !important;
  text-decoration: none !important;
}

.button {
  height: 64px !important;
}

</style>

