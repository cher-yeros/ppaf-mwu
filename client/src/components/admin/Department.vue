<template>
<div>
  <a-app-bar></a-app-bar>
  
   <v-container >
       <v-data-table
    :headers="headers" :items="deps" sort-by="SerialNumber" class="elevation-1"
  > <template v-slot:top>
      <v-toolbar flat >
        Departments
        <v-divider
          class="mx-4" inset vertical >
        </v-divider>
        <v-spacer></v-spacer>
        <v-text-field @keyup="searchQuery" class="mt-8" solo label="Search here" placeholder="Search by name, serial" v-model="search"></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog persistent max-width="600px" v-model="dialog" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success"
              darkclass="mb-2" v-bind="attrs" v-on="on">
              Add Department
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="white--text text-h5 blue lighten-2" >
                <span> {{ formTitle }}</span>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="dialog = false">
                <v-icon left>mdi-close</v-icon>
                Close
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6" >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Department Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-select
                      :items="filterdEmps"
                      item-text="fullname"
                      item-values="id"
                      v-model="editedItem.headId"
                      label="UnitPrice (g)"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.head="{ item }">
      <span :class="item.dephead? null :'red--text'">
        {{  item.dephead? item.dephead.fullname: "Head Not Set" }}
      </span>
      
    </template>
    
    <template v-slot:item.actions="{ item }">
      <v-btn-toggle >
        <v-btn width="100px" small class="" @click="editItem(item)" color="success">
        <v-icon left >
          mdi-pencil
        </v-icon> {{ item.dephead? "Edit": "Assign" }}
      </v-btn>

      <v-btn  width="100px" small class="" @click="deleteItem(item)" color="error">
        <v-icon dark left >
          mdi-delete
        </v-icon> Delete
      </v-btn>
      </v-btn-toggle>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize" >
        Reset
      </v-btn>
    </template>
  </v-data-table>
   </v-container>
</div>
</template>

<script>
import AppBar from './AppBar';
import axios from 'axios';

export default {
  component: { AppBar },
  data() {
    return {
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Department Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Head', value: 'head' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      deps: [],
      emps: [],
      filterdEmps: [],
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
      selectedDepId : 0
    }
  },
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
      this.fetchEmps()
    },

    methods: {
      async initialize () {
        let url = "http://localhost:3000/api/sa/get-deps"
        let response = await axios.get(url);
        if(response.data.success) {
          this.deps = response.data.deps
        }
      },
      async fetchEmps() {
        console.log(this.editedItem)
        let url = "http://localhost:3000/api/sa/get-employees";

        let response = await axios.get(url)

        if(response.data.success) {
          this.emps = response.data.employees
        }
      },

      editItem (item) {
        this.editedIndex = this.deps.indexOf(item)
        this.editedItem = Object.assign({}, item)
        let f = this.emps.filter(emp => emp.depId === this.editedItem.id);
        this.filterdEmps = f
        this.dialog = true

        console.log(this.editedItem)
      },

      deleteItem (item) {
        this.editedIndex = this.deps.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        let item = this.deps.splice(this.editedIndex, 1)

        let id = item[0].id;
        let url = "http://localhost:3000/api/store-keeper/delete-property";

        console.log(id, " = to be deleted")
        let response = await axios.delete(url,{
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

        let url = `http://localhost:3000/api/sa/get-deps?q=${this.search}`
        let response = await axios.get(url);

        if(response.data.success) {
          this.deps = response.data.deps
        }
      },
      async save () {
        if(this.editedIndex === -1) {
          let url = "http://localhost:3000/api/store-keeper/add-property";

          let d = this.editedItem;
          
          delete d.createdAt
          delete d.updatedAt

          console.log(d)

          return

          try {
            const response = await axios.post(url,d)
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
          let url = "http://localhost:3000/api/store-keeper/update-property";

          let d = this.editedItem;
          
          delete d.createdAt
          delete d.updatedAt

          console.log(d)

          return

          try {
            const response = await axios.put(url,d)
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

<style>

</style>