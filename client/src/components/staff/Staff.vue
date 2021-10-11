<template>
<div>
  <s-app-bar></s-app-bar>
  <v-main >
    <<v-simple-table v-if="status.issued">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="issued in status.issued"
          :key="issued.id"
        >
          <td>{{ issued.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-main>
</div>
</template>

<script>
import AppBar from './AppBar';

export default {
  component: { AppBar },
  data () {
    return {
      status: null
    }
  },
  methods: {
    async initialize() {
      const id = 261
      let url = this.$hostname + "api/staff/status/"+id;
      let config = {
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      }
      let response = await this.$axios.get(url)
      this.status = response.data
      console.log(this.status)
    }
  },
  created() {
    this.initialize()
  }
}
</script>

<style>

</style>