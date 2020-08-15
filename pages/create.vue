<template>
  <modal-wallet />
</template>

<script>
import ModalWallet from '../components/ModalWallet'
export default {
  name: 'Create',
  components: {
    ModalWallet
  },
  asyncData (context) {
    const userdata = context.store.state.app.userdata
    if (userdata) {
      context.$axios.get(`user/${userdata.id}`)
    }
  },
  computed: {
    userdata: {
      get () {
        return this.$store.state.app.userdata
      }
    }
  }
}
</script>
