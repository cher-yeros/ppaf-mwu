<template>
  <div v-show="show" class="text-center c-alert" >
    <v-alert border="left" dismissible prominent :type="ad.type">
          {{ ad.msg }}
      </v-alert>
  </div>
</template>

<script>
export default {
  data() {
      return {
          show : false,
          ad : {}
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
      this.show = false;
      this.$store.commit('showAlert', {
        show : false,
        msg : '',
        type : ''
      })
    },
    showAlert() {
      this.show = true
      setTimeout(this.closeAlert,3000)
    }
  },
  mounted() {
    setTimeout(this.closeAlert,3000)

  },
  watch:  {
    '$store.state.alertData' : function() {
      let d = this.$store.state.alertData
      if(d.show) {
        this.ad = d
        this.showAlert()
      }
    }
  },
  created() {
    
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