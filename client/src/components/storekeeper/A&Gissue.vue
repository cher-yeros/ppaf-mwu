<template>
<div>
   <sk-app-bar ></sk-app-bar>
   <v-main >
       <v-data-table
    :headers="headers"
    :items="issues"
    sort-by="SerialNumber"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat >
        issues
        <v-divider
          class="mx-4" inset vertical >
        </v-divider>
        <v-spacer></v-spacer>
        <v-text-field @keyup="searchQuery" class="mt-8" solo label="Search here" placeholder="Search by Employer , Property" v-model="search"></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:item.name="{ item }">
      {{ item.employee.fullname }}
    </template>

    <template v-slot:item.property="{ item }">
      {{ item.Property.name }}
    </template>

    <template v-slot:item.actions="{ item }">
      <v-btn-toggle >
        <v-btn width="100px" small class="" @click="showConfirmation(item)" color="success">
        <v-icon left >
          mdi-pencil
        </v-icon> Approve
      </v-btn>

      
      </v-btn-toggle>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

  <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure to approve giving the Item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="approveItem">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
   </v-main>
</div>
</template>
 

<script>
const axios = require('axios');
  export default {
    
    data: () => ({
      search: "",
      dialogDelete: false,
      headers: [
        {
          text: 'Employer Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Property', value: 'property',sortable: false, },
        { text: 'Quantity', value: 'quantity' ,sortable: false,},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      issues: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        SNO: '',
        type: '',
        quantity: '',
        unit_price: '',
      },
      defaultItem: {
        name: '',
        SNO: 0,
        type: 0,
        quantity: 0,
        unit_price: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      showInput() {
        return this.editedIndex === -1 ? true : false
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      search(val) {
        if(val == "")
          this.initialize()
      }
    },
    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        let url = this.$hostname+"api/sa/get-issues"

        let response = await this.$axios.get(url);

        if(response.data.success) {
          this.issues = response.data.issues
        }
      },

      showConfirmation(item) {
        this.editedIndex = this.issues.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async approveItem () {

        // return;
        

        let url = this.$hostname+"api/store-keeper/approve-issue"

        let data = {
          id : this.editedItem.id
        }

        let response = await this.$axios.put(url, data)

        if(response.data.result[0]) {
          this.initialize()
        }
        else {
          console.log("Something went wrong")
        }

        
        this.dialogDelete = false
      },

      rejectItem (item) {
        this.editedIndex = this.issues.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async rejectItemConfirm () {
        let item = this.issues.splice(this.editedIndex, 1)

        let id = item[0].id;
        let url = this.$hostname+"api/store-keeper/delete-property";

        console.log(id, " = to be deleted")
        let response = await this.$axios.delete(url,{
          data : {id}
        })

        if(response.data.success) {
          console.log("deleted")
        }
        else {
          console.log("not deleted")
        }

        this.initialize()
        
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async searchQuery() {
        if(this.search == "") {
          return
        }

        let url = this.$hostname+`api/store-keeper/get-property?q=${this.search}`
        let response = await this.$axios.get(url);

        if(response.data.success) {
          this.issues = response.data.issues
        }
      },
      async save () {
        if(this.editedIndex === -1) {
          let url = this.$hostname+"api/store-keeper/add-property";

          let d = this.editedItem;
          
          delete d.createdAt
          delete d.updatedAt

          console.log(d)

          try {
            const response = await this.$axios.post(url,d)
            if(response.data.success) {
              console.log("Success")
            }
            else {
              console.log("Error")
            }
          } catch (error) {
            console.log("Error ---> "+error)
          }
          this.close()
          this.initialize()
        }
        else {
          let url = this.$hostname+"api/store-keeper/update-property";

          let d = this.editedItem;
          
          delete d.createdAt
          delete d.updatedAt

          console.log(d)

          try {
            const response = await this.$axios.put(url,d)
              if(response.data.success[0]) {
                console.log("Success")
              }
              else {
                console.log("Error")
              }
          } catch (error) {
              console.log("Error ---> "+error)
          }
          
          this.close()
          this.initialize()
          }
        
      },
    },
  }
</script>