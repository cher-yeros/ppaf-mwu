<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          Add Property
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-text-field label="የዕቃው ስም*" required hint="Printer"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-text-field label="መለያ ቁጥር*" required hint="JD7878dhjk" ></v-text-field>
              </v-col>
              
              <v-col cols="12" sm="12" md="6">
                <v-select :items="['ቋሚ','አላቂ']" label="አይነት" required></v-select>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-select :items="['በቁጥር','በአይነት','በብዛት']" label="መለኪያ" required ></v-select>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Unit Price*" required hint="1254.48" ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field label="Quantity*" required hint="12" type='number' ></v-text-field>
              </v-col>

            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="emitEvent">
            <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
          <v-btn color="success" >
          <v-icon left>mdi-plus</v-icon>
            save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
    data: () => ({
      dialog: true,
    }),
    methods : {
      emitEvent() {
        this.$emit('closed')
      }
    }
  }
</script>