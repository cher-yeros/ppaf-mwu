<template>
<div>
  <s-app-bar></s-app-bar>
  <div class="main" app>
    <v-btn   x-large @click="dialog=true">
        Ask to leave issue
    </v-btn>
  </div>
  <v-row justify="center">

    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          leave Issue Form
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            

              <v-col cols="12" sm="12" md="6">
                <v-select :items="['kjkhg','jjjj','jddas']" label="property" required ></v-select>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Destination" required hint="Balerobe" type='text' ></v-text-field>
              </v-col>

            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="dialog = false">
            <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
          <v-btn color="success" >
          <v-icon left>mdi-plus</v-icon>
            send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

    <Form @closed="show = false" v-if="show"></Form>
</div>
</template>

<script>
import AppBar from './AppBar.vue';


export default {
  component: { AppBar },
  data() {
      return {
          show: false,
          dialog: false,
      }
    },
    methods : {
      
    }
  }

</script>

<style>

</style>