<template>
  <div>
  <s-app-bar ></s-app-bar>
  <v-main >
   <v-card>
      <v-card-title>
             Employee
              <v-spacer></v-spacer>
         <v-text-field
               v-model="search"
               append-icon="mdi-magnify"
                label="Search status using id"
                single-line
                hide-details
         ></v-text-field>
     </v-card-title>
         <v-data-table
               :headers="headers"
               :items="employe"
               :search="search"
          ></v-data-table>
  </v-card>
  </v-main>
</div>
</template>

<script>
import AppBar from './AppBar';

export default {
  component: { AppBar },
  data () {
      return {
        search: '',
        headers: [
          {
            text: 'employe id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Issue', value: 'Issue' },
          { text: 'borrow', value: 'borrow' },
          { text: 'transfer', value: 'transfer' },
          { text: 'leave_issue', value: 'leave_issue' },
          
        ],
        employe: [
          {
            id: 66677899,
            Issue: 159,
            borrow: 6.0,
            transfer: 24,
            leave_issue: 4.0,
          
          },
          {
            id: 6699,
            Issue: 159,
            borrow: 6.0,
            transfer: 24,
            leave_issue: 4.0,
          },
          {
            id: 6236677899,
            Issue: 159,
            borrow: 6.0,
            transfer: 24,
            leave_issue: 4.0,
          },
          {
            id: 77677899,
            Issue: 159,
            borrow: 6.0,
            transfer: 24,
            leave_issue: 4.0,
          },
          
          {
            id: 100077899,
            Issue: 159,
            borrow: 6.0,
            transfer: 24,
            leave_issue: 4.0,
          },
          
           
        ],
      }
  },
  


}
</script>

<style>

</style>