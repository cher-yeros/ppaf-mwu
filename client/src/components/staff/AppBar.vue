<template>
  
    <v-toolbar 
    color= blue dark>

      

      <v-toolbar-title>Staff</v-toolbar-title>
         <v-spacer></v-spacer>
         
      <v-toolbar-items>
      <router-link to="/s/Show_status">
        <v-btn class="button blue elevation-0 active" text color=white>Show Status</v-btn>
      </router-link>
        <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          class="blue elevation-0 active" text color=white
          v-bind="attrs"
          v-on="on"
        >
           Transaction
        </v-btn>
      </template>
      <v-list>
        <!--<router-link to="/s/Issue"> -->
          <v-list-item @click="issueD = true">
            <v-list-item-title>Issue property</v-list-item-title>
          </v-list-item>
        <!--</router-link>-->
        <!--<router-link to="/s/Borrow"> -->
          <v-list-item @click="borrowD = true">
            <v-list-item-title>Borrow property</v-list-item-title>
          </v-list-item>
        </router-link>
       <!--<router-link to="/s/Transfer"> -->
           <v-list-item @click="transferD = true">
            <v-list-item-title>Transfer property</v-list-item-title>
          </v-list-item> 
        <!--</router-link>-->
      <!--<router-link to="/s/Leave_Issue"> -->
        <v-list-item @click="lissueD = true">
          <v-list-item-title>Leave Issue</v-list-item-title>
        </v-list-item> 
      <!--</router-link>-->
      

      </v-list>
    </v-menu>
           <!-- <v-btn class="blue elevation-0 active" text color=white>Isuee property</v-btn>
           <v-btn class="blue elevation-0 active" text color=white>Borrow property</v-btn>
           <v-btn class="blue elevation-0 active" text color=white>Transefer property</v-btn>
          <v-btn class="blue elevation-0 active" text color=white>Return property</v-btn>
          <v-btn class="blue elevation-0 active" text color=white>Request purchase</v-btn>
          <v-btn class="blue elevation-0 active" text color=white>Leave Issue</v-btn> -->
      
      
      </v-toolbar-items>
      <!--<v-spacer></v-spacer>-->
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
    <v-list-item>
      <v-list-item-title>
        <v-icon left >mdi-account</v-icon>
        Profile
      </v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-title>
          <v-icon left >mdi-logout</v-icon>
          Logout</v-list-item-title>
    </v-list-item>
  </v-list>
</v-menu>



    <v-dialog
      v-model="issueD"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          Issue Form
          <v-spacer></v-spacer>
            <v-btn color="error" @click="issueD = false">
              <v-icon left>mdi-close</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-autocomplete v-model="issue.PropertyId" :items="props" item-text="name" item-value="id" label="property" required></v-autocomplete>
                <!--<v-select :items="props" item-text="name" item-value="id" label="property" required ></v-select>-->
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="issue.quantity" label="Quantity*" required hint="12" type='number' min=1></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
        
          <v-btn @click="performIssue" color="success" >
          <v-icon left>mdi-plus</v-icon>
            Issue
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

    <v-dialog v-model="borrowD" persistent max-width="600px">

      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          borrow Form
          <v-spacer></v-spacer>
          <v-btn color="error" @click="borrowD = false">
            <v-icon left>mdi-close</v-icon>
            Close
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            

              <v-col cols="12" sm="12" md="6">
                <v-autocomplete v-model="borrow.PropertyId" :items="props" item-text="name" item-value="id" label="property" required></v-autocomplete>
              </v-col>
               <v-col cols="12" sm="12" md="6">
                <v-autocomplete v-model="borrow.employeId" :items="emp" item-text="fullname" item-value="id" label="to employe" required></v-autocomplete>
                <!-- <v-select :items="['kjkhg','jjjj','jddas']" label="Employe to be borroed" required ></v-select> -->
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="borrow.quantity" label="Quantity*" required hint="12" type='number' min=1></v-text-field>
              </v-col>

              
            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
         
          <v-btn @click="performBorrow" color="success" >
          <v-icon left>mdi-plus</v-icon>
            borrow
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>


    <v-dialog
      v-model="lissueD"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          leave Issue Form
          <v-spacer></v-spacer>
        <v-btn color="error" @click="lissueD = false">
          <v-icon left>mdi-close</v-icon>
          Close
        </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            

              <v-col cols="12" sm="12" md="6">
               <v-autocomplete v-model="lissue.PropertyId" :items="props" item-text="name" item-value="id" label="property" required></v-autocomplete>
                <!-- <v-select :items="['kjkhg','jjjj','jddas']" label="property" required ></v-select> -->
              </v-col>

              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="lissue.destination" label="Destination" required hint="Balerobe" type='text' ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="lissue.quantity" label="Quantity*" required hint="12" type='number' min=1></v-text-field>
              </v-col>

            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
         
          <v-btn @click="performlissue" color="success" >
          <v-icon left>mdi-plus</v-icon>
            leaveissue
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

     <v-dialog
      v-model="transferD"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title class="white--text text-h5 blue lighten-2">
          transfer Form
          <v-spacer></v-spacer>
        <v-btn color="error" @click="transferD = false">
          <v-icon left>mdi-close</v-icon>
          Close
        </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            

              <v-col cols="12" sm="12" md="6">
               <v-autocomplete v-model="transfer.PropertyId" :items="props" item-text="name" item-value="id" label="property" required></v-autocomplete>
                <!-- <v-select :items="['kjkhg','jjjj','jddas']" label="property" required ></v-select> -->
              </v-col>
               <v-col cols="12" sm="12" md="6">
                <v-autocomplete v-model="transfer.emloyeId" :items="emp" item-text="fullname" item-value="id" label="to employe" required></v-autocomplete>
                <!-- <v-select :items="['kjkhg','jjjj','jddas']" label="Employe to be borroed" required ></v-select> -->
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="transfer.quantity" label="Quantity*" required hint="12" type='number' min=1></v-text-field>
              </v-col>

              
            </v-row>
          </v-container>

          <small class="red--text">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
         
          <v-btn color="success" @click="performtransfer" >
          <v-icon left>mdi-plus</v-icon>
            transfer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-toolbar>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      props: [],
      emp:[],
      issueD: false,
      borrowD: false,
      lissueD: false,
      transferD: false,
      issue: {},
      borrow:{},
      transfer:{},
      lissue:{}

    }
  },
  methods: {
    async fetchData() {
      let url = "http://localhost:3000/api/store-keeper/get-property"

      let response = await axios.get(url);

      if(response.data.success) {
        this.props = response.data.properties
      }
    },
    async performIssue() {
      this.issue.emp_id = 12
      console.log(this.issue)

      let q = this.props.find(x => x.id === this.issue.PropertyId).quantity;
      if(this.issue.quantity > q){
        console.log("Not available Ammount")
        return
      }
      let url = "http://localhost:3000/api/staff/issue"
      let response = await axios.post(url,this.issue)

      if(response.data.success) {
        console.log("Issue Added")
      } 
      else  {
        console.log("not added");
      }
    


    },
    async fetchEmployees(){
        var url = "http://localhost:3000/api/sa/get-employees";
        let response = await axios.get(url);
        if(response.data.success){
        this.emp= response.data.employees
        }
        console.log(this.emp)
      
    },
   
    async performlissue(){
      
       let q = this.props.find(x => x.id === this.lissue.PropertyId).quantity;
      if(this.lissue.quantity > q){
        console.log("Not available Ammount")
        return
        }
       let url = "http://localhost:3000/api/staff/leave-issue"
this.lissue.emp_id = 12
    console.log(this.lissue) 
    // return
      let response = await axios.post(url,this.lissue)

      
console.log(response.data)

      if(response.data.success) {
        console.log("leave Issue Added")
      } 
      else  {
        console.log("not added");
      }
    

    },
    async performtransfer(){
       let q = this.props.find(x => x.id === this.transfer.PropertyId).quantity;
      if(this.transfer.quantity > q){
        console.log("Not available Ammount")
        return
        }
       let url = "http://localhost:3000/api/staff/transfer"
      let response = await axios.post(url,this.transfer)

      if(response.data.success) {
        console.log("Transfer Added")
      } 
      else  {
        console.log("not added");
      }
    

    },

    async performBorrow(){
       let q = this.props.find(x => x.id === this.borrow.PropertyId).quantity;
      if(this.borrow.quantity > q){
        console.log("Not available Ammount")
        return
        }
       let url = "http://localhost:3000/api/staff/borrow"
      let response = await axios.post(url,this.borrow)


      if(response.data.success) {
        console.log("Borrow Added")
      } 
      else  {
        console.log("not added");
      }
    

    }

  },
  created() {
    this.fetchData(),
    this.fetchEmployees()
   

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