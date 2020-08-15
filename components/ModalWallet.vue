<template>
  <div>
    <div class="text-center mt-10">
      <v-btn
        class="primary"
        rounded
        :disabled="!!wallet"
        @click="createWallet"
      >
        Создать кошелек
      </v-btn>
    </div>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title>Кошелек создан</v-card-title>
        <v-card-text>Скопируйте и запишите логин, восстановить его невозможно</v-card-text>
        <v-card-text class="mb-0">
          <v-text-field
            id="codefield"
            label="Ваш логин"
            outlined
            :value="mnemonic"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="copy">
            Скопировать
          </v-btn>
          <v-btn color="danger" @click="close">
            Понятно
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModalWallet',
  data () {
    return {
      generation: false,
      dialog: false,
      code: 'lake cushion lake spend economy fall acid permit sea limit chaos curious'
    }
  },
  computed: {
    mnemonic: {
      get () {
        return this.wallet ? this.wallet._mnemonic : null
      }
    },
    wallet: {
      get () {
        return this.$store.state.app.wallet
      }
    },
    userdata: {
      get () {
        return this.$store.state.app.userdata
      }
    }
  },
  methods: {
    copy () {
      const text = document.getElementById('codefield')
      text.select()
      document.execCommand('copy')

      this.$toast.success('Скопировано')
    },
    createWallet () {
      this.$store.dispatch('app/createWallet').then(() => {
        this.dialog = true
      }).catch(() => {
        this.$toast.error('Невозможно создать кошелек')
      })
    },
    close () {
      this.dialog = false
      this.$router.push({
        name: 'candidates'
      })
    }
  }
}
</script>
