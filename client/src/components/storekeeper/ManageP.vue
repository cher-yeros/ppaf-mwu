<template>
<div>
   <sk-app-bar ></sk-app-bar>
   <v-main >
       <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="SerialNumber"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat >
        <v-divider
          class="mx-4" inset vertical >
        </v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
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
                      v-model="editedItem.SerialNumber"
                      label="SerialNumber"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Type"
                      label="Type (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Quantity"
                      label="Quantity (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.UnitPrice"
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
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Property Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Serial Number', value: 'SerialNumber',sortable: false, },
        { text: 'Type  ', value: 'Type',sortable: false, },
        { text: 'Quantity', value: 'Quantity' ,sortable: false,},
        { text: 'Unit Price', value: 'UnitPrice' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        SerialNumber: '',
        Type: '',
        Quantity: '',
        UnitPrice: '',
      },
      defaultItem: {
        name: '',
        SerialNumber: 0,
        Type: 0,
        Quantity: 0,
        UnitPrice: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Dell',
            SerialNumber: 159,
            Type: 6.0,
            Quantity: 24,
            UnitPrice: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            SerialNumber: 237,
            Type: 9.0,
            Quantity: 37,
            UnitPrice: 4.3,
          },
          {
            name: 'Eclair',
            SerialNumber: 262,
            Type: 16.0,
            Quantity: 23,
            UnitPrice: 6.0,
          },
          {
            name: 'Cupcake',
            SerialNumber: 305,
            Type: 3.7,
            Quantity: 67,
            UnitPrice: 4.3,
          },
          {
            name: 'Gingerbread',
            SerialNumber: 356,
            Type: 16.0,
            Quantity: 49,
            UnitPrice: 3.9,
          },
          {
            name: 'Jelly bean',
            SerialNumber: 375,
            Type: 0.0,
            Quantity: 94,
            UnitPrice: 0.0,
          },
          {
            name: 'Lollipop',
            SerialNumber: 392,
            Type: 0.2,
            Quantity: 98,
            UnitPrice: 0,
          },
          {
            name: 'Honeycomb',
            SerialNumber: 408,
            Type: 3.2,
            Quantity: 87,
            UnitPrice: 6.5,
          },
          {
            name: 'Donut',
            SerialNumber: 452,
            Type: 25.0,
            Quantity: 51,
            UnitPrice: 4.9,
          },
          {
            name: 'KitKat',
            SerialNumber: 518,
            Type: 26.0,
            Quantity: 65,
            UnitPrice: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
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

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>