<template>
  <v-app>
    <v-app-bar
      dark
      fixed
      app
      color="primary"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        color="success"
        href="https://t.me/joinchat/HVJZSVHPM_CPqUuDDhxZBA"
        target="_blank"
        large
        dark
        bottom
        left
        class="v-btn--example"
      >
        <v-icon>mdi-telegram</v-icon>
        Поддержка
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Честный голос'
    }
  }
}
</script>
