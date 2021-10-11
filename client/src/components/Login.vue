<template>
   <v-container>
   <v-row justify="center">
      <v-img src="../assets/mwu.png"  max-width='150' aspect-ratio="0.9"/>
   </v-row> 

  <h1 align='center' class="blue--text ma-2">Procurement and property Administration Portal</h1>
   
    <v-col justify="center" align="center" >
      <v-flex xs12 sm8 md7 class="mx-2 white elevation-6">
        <v-toolbar dense dark flat color="blue">
          <!--<v-toolbar-title>Login</v-toolbar-title>-->
         
  <v-tabs fixed-tabs background-color="#0148a4" dark v-model="role">
    <v-tab v-for="role in roles" :key="role.slug">
        {{ role.name }}
    </v-tab>
  </v-tabs>

        </v-toolbar>
        <v-form m-3 p-3 class="mx-5 px-4" aria-autocomplete="off" ref="loginForm">
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
            label="ID Number"
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
            @keyup.enter="login"
          ></v-text-field>

          <!--<v-select
          :items="roles"
          item-text="name"
          item-value="slug"
          label="Choose Role"
          v-model="info.role"
        ></v-select>-->

          <v-btn class="blue my-2" dark @click="login">Login</v-btn>
          <br />
        </v-form>
      </v-flex>
    </v-col>
    <alert></alert>
  </v-container>
</template>

<script>
import Alert from './Alert.vue';
export default {
  component: { Alert },
  data() {
    return {
      role: null,
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
      info: {
        idno: "mwu/123/2015",
        password: "password",
        role: ""
      },
      error: "",
      idnoRules: [(v) => !!v || "Id Number is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    async login() {
      if(!this.$refs.loginForm.validate()) {
        return
      }

      let role = this.roles[this.role].slug
      this.info.role = role
      let url = this.$hostname+"api/login";
      const response = await this.$axios.post(url, this.info);


      if(response.data.success) {
        let emp = response.data.e;
        emp.loggedInAs = role

        this.$store.commit('storeLogin', emp)

        this.redirect(role)
        
      }
      else {
        this.$store.commit('showAlert',{
          type: 'error',
          msg: response.data.error,
          show: true
        })
      }
    },
    redirect(role) {
      switch(role) {
            case this.roles[0].slug: 
            this.$router.push('/'+this.roles[0].slug)
            break;
            case this.roles[1].slug: 
            this.$router.push('/sa')
            break;
            case this.roles[2].slug: 
            this.$router.push('/'+this.roles[2].slug)
            break;
            case this.roles[3].slug: 
            this.$router.push('/'+this.roles[3].slug)
            break;
            case this.roles[4].slug: 
            this.$router.push('/'+this.roles[4].slug)
            break;
        }
    }
  },
  created() {
      if(this.$store.state.login.loggedIn) {
        this.redirect(this.$store.state.login.loggedInAs)
        console.log("Already Logged In", this.$store.state.login)
      }
      else {
        console.log("New Login",this.$store.state.login)
      }
  }
};
</script>

<style scoped>
</style>