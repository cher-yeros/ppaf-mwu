<template>
<div>
   <sk-app-bar ></sk-app-bar>
   <v-main >
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Property Name</th>
          <th class="text-left">Model</th>
          <th class="text-left">Available In The Store</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dell Descktop</td>
          <td>optiplex</td>
          <td>20</td>
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
  
}
</script>

<style>

</style>

 