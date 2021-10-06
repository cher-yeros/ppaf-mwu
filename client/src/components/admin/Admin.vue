<template>
<div>
  <app-bar ></app-bar>
  <v-main >
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="3">
          <v-card elevation="5" >
            <v-list-item>
              <v-list-item-avatar tile class="mt-n10">
                <v-sheet
                  color="success"
                  elevation="10"
                  height="120"
                  outlined
                  rounded
                  width="120"
                > <v-icon dark large>JK</v-icon> </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">Employee</div>
                <v-list-item-title class="headline mb-1 text-right">2,021</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
              <v-card-actions>
                <div class="overline">Iyad</div>
              </v-card-actions>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          adfg
        </v-col>

        <v-col cols="12" sm="4" md="3">
          adfg
        </v-col>

        <v-col cols="12" sm="4" md="3">
          adfg
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</div>
</template>

<script>
import AppBar from './AppBar';

export default {
  component: { AppBar },
  
}
</script>

<style>

</style>