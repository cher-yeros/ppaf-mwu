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
            v-model="info.username"
            :rules="unameRules"
            label="Username"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            v-model="info.password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-select
          :items="roles"
          label="Choose Role"
          v-model="info.role"
        ></v-select>

          <v-btn class="blue my-2" dark @click="login">Login</v-btn>
          <br />
        </v-form>
      </v-flex>
    </v-col>
  </v-container>
</template>

<script>
//import axios from "axios";
export default {
  data() {
    return {
      roles: ['Staff','Admin','Purchaser','Store Keeper']  ,
      endpoint: "http://localhost:5000/login",
      info: {
        username: "",
        password: "",
        role: ""
      },
      error: "",
      unameRules: [(v) => !!v || "Username is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    login() {
        switch(this.info.role) {
            case this.roles[0]: 
            this.$router.push('/staff')
            break;
            case this.roles[1]: 
            this.$router.push('/sa')
            break;
            case this.roles[2]: 
            this.$router.push('/purchaser')
            break;
            case this.roles[3]: 
            this.$router.push('/store-keeper')
            break;
        }
    //  axios
    //    .post(this.endpoint, this.info)
    //    .then(({ data }) => {
    //      console.log(data);
    //      if (data.success) {
    //        this.$store.dispatch("setUser", data.user);
    //        this.$router.push("/");
    //      } else {
    //        this.error = "Wrong username or password";
    //      }
    //    })
    //    .catch((error) => {
    //      console.log(error.response.data);
    //      this.error = error.response.data;
    //    });

      // this.$store.dispatch("setUser", this.info);
      // this.$router.push("/?username=hello&room=vue");
    },
  },
};
</script>

<style scoped></style>
