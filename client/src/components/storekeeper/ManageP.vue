<template>
<div>
   <sk-app-bar ></sk-app-bar>
   <v-main >
       <v-data-table
    :headers="headers"
    :items="properties"
    sort-by="SerialNumber"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat >
        Properties
        <v-divider
          class="mx-4" inset vertical >
        </v-divider>
        <v-spacer></v-spacer>
        <v-text-field @keyup="searchQuery" class="mt-8" solo label="Search here" placeholder="Search by name, serial" v-model="search"></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Property
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Product Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.SNO"
                      label="SerialNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.type"
                      label="Type (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.quantity"
                      label="Quantity (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.unit_price"
                      label="UnitPrice (g)"
                    ></v-text-field>
                  </v-col>

                  <v-col v-show="showInput"
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.unit"
                      label="UnitPrice (g)"
                    ></v-text-field>
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
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
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
   </v-main>
</div>
</template>
 

<script>
const axios = require('axios');
  export default {
    
    data: () => ({
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Property Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Serial Number', value: 'SNO',sortable: false, },
        { text: 'Type  ', value: 'type',sortable: false, },
        { text: 'Quantity', value: 'quantity' ,sortable: false,},
        { text: 'Unit Price', value: 'unit_price' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      properties: [],
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
        let url = this.$hostname+"api/store-keeper/get-property"

        let response = await this.$axios.get(url);

        if(response.data.success) {
          this.properties = response.data.properties
        }
      },

      editItem (item) {
        this.editedIndex = this.properties.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.properties.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        let item = this.properties.splice(this.editedIndex, 1)

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
          this.properties = response.data.properties
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