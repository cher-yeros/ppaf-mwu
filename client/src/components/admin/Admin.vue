<template>
<div>
  <a-app-bar ></a-app-bar>
  <v-main >
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="3">
          <v-card color="primary" dark
            elevation="5"
          >
          <v-card-title>Employee</v-card-title>
          <v-card-subtitle>Number of Employee</v-card-subtitle>
          <v-card-text>4 254</v-card-text>
          <v-card-actions>
            <v-btn outlined color="">See more</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <v-card color="error" dark
            elevation="5"
          >
          <v-card-title>Properties</v-card-title>
          <v-card-subtitle>Number of Employee</v-card-subtitle>
          <v-card-text>4 254</v-card-text>
          <v-card-actions>
            <v-btn outlined color="">See more</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <v-card color="alert" dark
            elevation="5"
          >
          <v-card-title>Department</v-card-title>
          <v-card-subtitle>Number of Employee</v-card-subtitle>
          <v-card-text>4 254</v-card-text>
          <v-card-actions>
            <v-btn outlined color="">See more</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <v-card color="success" dark
            elevation="5"
          >
          <v-card-title>Transaction</v-card-title>
          <v-card-subtitle>Number of Employee</v-card-subtitle>
          <v-card-text>4 254</v-card-text>
          <v-card-actions>
            <v-btn outlined color="">See more</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <alert :d="d" v-if="alert" @dismissed="alert = false"></alert>
  </v-main>
</div>
</template>

<script>
import Alert from '../Alert.vue';
import AppBar from './AppBar';

export default {
  components: { Alert },
  component: { AppBar },
  data() {
    return {
      alert: false,
      d: {}
    }
  },
  methods: {
    showAlert() {
      this.d = {
        type: "success",
        msg: "Successfull Added"
      }
      this.alert = true
    },
    showAlertE() {
      this.d = {
        type: "error",
        msg: "Can't Add Successfully!"
      }
      this.alert = true
    }
  }
}
</script>

<style>

</style>