<template>
  <div class="text-center mt-10">
    <div id="place-btn" />
  </div>
</template>

<script>
export default {
  name: 'Register',
  computed: {
    userdata: {
      get () {
        return this.$store.state.app.userdata
      }
    }
  },
  mounted () {
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-widget.js?10'
    script.setAttribute('async', true)
    script.setAttribute('data-telegram-login', 'igorvotingmachine_bot')
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-onauth', 'onTelegramAuth(user)')
    script.setAttribute('data-request-access', 'write')
    const place = document.getElementById('place-btn')
    place.appendChild(script)
    window.onTelegramAuth = (user) => {
      this.login(user)
    }
    if (this.userdata) {
      this.clearFrame()
    }
  },
  methods: {
    login (data) {
      this.$store.dispatch('app/setUserData', data).then(() => {
        this.clearFrame()
        this.$router.push({
          name: 'passport'
        })
      })
    },
    clearFrame () {
      const frames = document.getElementsByTagName('iframe')
      for (let i = 0; i < frames.length; i++) {
        frames[0].remove()
      }
    }
  }
}
</script>
