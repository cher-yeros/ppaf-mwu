<template>
   <v-container>
    <v-col justify="center" align="center" height="00px">
      <v-flex xs12 sm8 md6 class="mx-2 white elevation-6">
        <v-toolbar dense dark flat color="blue">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-form m-3 p-3 class="mx-5 px-4" aria-autocomplete="off">
          <v-alert
            dense
            type="error"
            class="my-2 error white--text"
            v-show="error"
            v-text="error"
          ></v-alert>
          <!-- <v-alert type="error" v-show="error" v-text="error"> </v-alert> -->
          <v-text-field
            v-model="info.idno"
            :rules="idnoRules"
            label="Username"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            v-model="info.password"
            :rules="passwordRules"
            label="Password"
            :type="visible? 'text' : 'password'"
            required
            :append-icon="visible? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="() => (visible = !visible)"
          ></v-text-field>

          <v-select
          :items="roles"
          item-text="name"
          item-value="slug"
          label="Choose Role"
          v-model="info.role"
        ></v-select>

          <v-btn class="blue my-2" dark @click="login">Login</v-btn>
          <br />
        </v-form>
      </v-flex>
    </v-col>
    <alert :d="d" v-if="alert" @dismissed="alert = false"></alert>
  </v-container>
</template>

<script>
import axios from "axios";
import Alert from './Alert.vue';
export default {
  component: { Alert },
  data() {
    return {
      d: {},
      alert: false,
      visible: false,
      roles: [
        {
          slug: 'staff',
          name: 'Staff' 
        },
        {
          slug: 'admin',
          name: 'Admin' 
        },
        {
          slug: 'store-keeper',
          name: 'Store Keeper' 
        },
        {
          slug: 'purchaser',
          name: 'Purchaser' 
        },
        {
          slug: 'head',
          name: 'Head' 
        }
      ],
      endpoint: "http://localhost:5000/login",
      info: {
        idno: "",
        password: "",
        role: ""
      },
      error: "",
      idnoRules: [(v) => !!v || "Username is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    async login() {
      let url = "http://localhost:3000/api/login";

      const response = await axios.post(url, this.info);

      if(response.data.success) {
        console.log("will be logged in")
        console.log(this.roles[0].slug, this.info);
        
        switch(this.info.role) {
            case this.roles[0].slug: 
            this.$router.push('/staff')
            break;
            case this.roles[1].slug: 
            this.$router.push('/sa')
            break;
            case this.roles[2].slug: 
            this.$router.push('/purchaser')
            break;
            case this.roles[3].slug: 
            this.$router.push('/store-keeper')
            break;
            case this.roles[4].slug: 
            this.$router.push('/head')
            break;
        }

        this.d.type = "success"
        this.d.msg = "Successfully Logged In"
        this.alert = true
      }
      else {
        console.log(response.data.error)
        this.d.type = "error"
        this.d.msg = response.data.error
        this.alert = true
      }
    },
  },
};
</script>

<style scoped>
</style>
