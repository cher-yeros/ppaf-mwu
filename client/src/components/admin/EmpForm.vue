<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          Add Employee
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.fullname" label="Fullname" required hint=""></v-text-field>
              </v-col>
              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.email" label="Email" required hint="" ></v-text-field>
              </v-col>
              
              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.phone" label="Phone" required hint="" ></v-text-field>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-select v-model="record.depId" :items="deps"  item-text="name" item-value="id" label="Department" required ></v-select>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.position" label="Position" required hint="" ></v-text-field>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.office_no" label="Office Number" required hint="" type='number' ></v-text-field>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.idno" label="ID Number" required hint="" ></v-text-field>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-text-field v-model="record.password" label="Password" required hint="" ></v-text-field>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <!--<v-file-input v-model="record.sign" @change="signSelected" prepend-icon="mdi-signature-freehand" truncate-length="27" label="Sign" required></v-file-input>-->
                <v-text-field @change="signSelected" type="file" label="Sign" required hint="" ></v-text-field>
              </v-col>

              <v-col class="rapper" cols="12" sm="12" md="6">
                <v-file-input v-model="record.avatar" prepend-icon="mdi-account" truncate-length="27" label="Profile Picture" required></v-file-input>
              </v-col>

            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small color="error" @click="emitEvent">
            <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
          <v-btn @click="submitForm"  color="success" >
          <v-icon left>mdi-plus</v-icon>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-alert v-if="alert" dismissible prominent type="success">
      Successfully Added
    </v-alert>
  </v-row>
</template>


<script>
const axios = require('axios');
  export default {
    props:['record'],
    data: () => ({
      dialog: true,
      deps : [],
      alert: false
    }),
    methods : {
      emitEvent() {
        this.$emit('closed')
      },
      signSelected(e) {
          //this.sign = e.target.files[0]
          console.log(e.target)
      },
      async initialize() {
        var url = "http://localhost:3000/api/sa/get-deps";

        let response = await axios.get(url);

        this.deps = response.data.result
      },
      async submitForm() {
        this.record.sign = "https://toppng.com/uploads/preview/signature-png-115539501081nmjnfovlk.png";
        this.record.avatar = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdata.whicdn.com%2Fimages%2F302058504%2Foriginal.jpg%3Ft%3D1511579073&imgrefurl=https%3A%2F%2Fweheartit.com%2Farticles%2F302058504-profile-pictures-girls&tbnid=4izHLjAAooe2hM&vet=12ahUKEwiy26XxrLXzAhWS8IUKHVVYCiUQMygEegUIARDUAQ..i&docid=kyF2Vmx4CIqAhM&w=500&h=496&q=girl%20profile%20picture&hl=en&ved=2ahUKEwiy26XxrLXzAhWS8IUKHVVYCiUQMygEegUIARDUAQ";
        var url = "http://localhost:3000/api/sa/add-employee";
        

        console.log(this.record)
        try {
          var result = await axios.post(url, this.record);
          if(result.data.success) {
            this.alert = true
            this.dialog = false
          }
        } catch (error) {
          console.error("ERror"+error.response.data);
        }
        
      }
    },
    mounted() {
      console.log(this.record)
      
    },
    created() {
      this.initialize()
    }
  }
</script>

<style>
.rapper {
    margin-top: 0px;
    /* padding: 0; */
    padding-top: 0px;
    padding-bottom: 0px;
}
</style>