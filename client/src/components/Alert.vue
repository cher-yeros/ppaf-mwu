<template>
  <div class="text-center c-alert" >
    <v-alert v-if="showAlert" border="left" dismissible prominent :type="d.type">
          {{d.msg}}
      </v-alert>
  </div>
</template>

<script>
export default {
  props: ['d'],
  data() {
      return {
          dialog: true,
          showAlert: true
      }
  },
  computed : {
    title() {
      if(this.d.type == "success") {
        return "Success Messege"
      }
      else {
        return "Error Messege"
      }
    },
    type() {
      this.d.type == "success"
    }
  },
  methods: {
    closeAlert() {
      this.showAlert = false;
      this.$emit('dismissed')
    }
  },
  mounted() {
    setTimeout(this.closeAlert,5000)
  }
}
</script>

<style>
.c-alert {
  position : fixed;
  right: 5%;
  bottom: 5%;
}
</style>