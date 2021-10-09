<template>
<div>
  <a-app-bar></a-app-bar>
  <v-container>
    <v-data-table :headers="headers" :items="employees" sort-by="fullname" class="pa-2 elevation-1" >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="subheading gray--text">Employees</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-spacer></v-spacer>

        <v-text-field class="mt-7" placeholder="Search here by name or id..." solo></v-text-field>
        
        <v-spacer></v-spacer>

        <v-btn @click="itemSelected = {} ;dialogForm = true" color="success" dark class="mb-2" >
          <v-icon left> mdi-plus </v-icon>
              Add
        </v-btn>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:item.dep="{ item }" v-text="">
      {{item.dep? item.dep.name : "Has no dep"}}
    </template>
    
    <template v-slot:item.actions="{ item }">
      <v-btn-toggle>
        <v-btn class="" @click="editItem(item)" color="success">
        <v-icon left >
          mdi-pencil
        </v-icon> Edit
      </v-btn>

      <v-btn class="" @click="deleteItem(item)" color="error">
        <v-icon dark left >
          mdi-delete
        </v-icon> Delete
      </v-btn>
      </v-btn-toggle>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>

  </v-container>
<emp-form :isAdd="isAdd" :record="itemSelected" @closed="dialogForm = false; isAdd=true" v-if="dialogForm"></emp-form>
<!--<emp-form :record="itemSelected" @closed="dialogForm = false" v-if="dialogForm"></emp-form>-->
</div>
</template>

<script>
import AppBar from './AppBar';
import EmpForm from './EmpForm.vue';
const axios = require('axios');

export default {
  component: { AppBar,EmpForm },
  data() {
      return {
          dialogDelete : false,
          dialogForm: false,
          headers: [
            { text: 'Fullname', align: 'start', value: 'fullname'},
            { text: 'Phone', value: 'phone' },
            { text: 'Email', value: 'email' },
            { text: 'Department', value: 'dep' },
            { text: 'Position', value: 'position',sortable: false },
            { text: 'Office No', value: 'office_no', sortable: false },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          employees: [],
          itemSelected : {},
          isAdd: true
      }
  },
  methods: {
      showForm() {
          this.showPropForm = true
      },
      editItem (item) {
        this.isAdd = false
        this.itemSelected = item;
        this.dialogForm = true;
      },

      deleteItem (item) {
        this.itemSelected = item;
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        console.log(this.itemSelected)
        this.dialogDelete = false
      },
      async initialize() {
        var url = "http://localhost:3000/api/sa/get-employees";

        try {
          let response = await axios.get(url);
          this.employees = response.data.employees
        } catch (error) {
          console.log(error);
        }

        
        
      },
      dep(e) {
        //console.log(e.dep.name)
        let f = JSON.parse(JSON.stringify(e.dep))
        //console.log(f.name);
      return f
    }
  },
  computed: {
    
  },
  created() {
    this.initialize()
  }
  
}

</script>

<style>

</style>