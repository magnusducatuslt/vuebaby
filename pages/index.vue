<template>
  <v-card max-width="700">
    <v-card-text>
      В целях регистрации в сервисе <b>“Честный голос”</b>, принимаю решение о предоставлении моих персональных данных сервису <b>”Честный голос”</b> и даю согласие на сбор, обработку и хранение  следующих персональных данных:
      <ol class="pl-3">
        <li>Дата рождения</li>
        <li>Личный номер</li>
        <li>Фотография паспорта</li>
        <li>Селфи с паспортом</li>
      </ol>
    </v-card-text>
    <v-card-actions>
      <v-checkbox v-model="policy" :disabled="policy" class="mt-0" label="Я согласен" />
    </v-card-actions>
    <v-dialog persistent max-width="500">
      <v-btn
        color="primary"
        @click="start"
      >
        Подтвердить личность
      </v-btn>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    policy: {
      get () {
        return this.$store.state.app.policy
      },
      set () {
        this.$store.commit('app/TOGGLE_POLICY')
        this.$router.push({
          name: 'register'
        })
      }
    }
  },
  data () {
    return {
      auth: {
        bot_id: 1298318153, // place id of your bot here
        scope: {
          data: [
            { type: 'id_document', selfie: true },
            { type: 'personal_details' }
          ],
          v: 1
        },
        public_key: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwWy51e0FR98/z1ORRH0T
Pi2RXEhYeT/+5Qit8buUsbp494jLouWNrnpblXAa73V+dKrmN+NUYf3WuAgjiE3+
n+k0twqngVDhVZq8p2laKJMCezulFc/DE69JUxSOU5sP7a/5JkK64Hw3Mp4UnlgV
2UmJ4+ohZk+EsaNlfmkQVolByZ5pTJE8lXUh6HV1w4ujuWarOXBn0Z4/GnrCz0mJ
JJm2fhDnVZY7dhCs/SaNNlbuSN3EjIdgyOUs4l1Cj8OpQgJsVyoVMsragONp/HTR
MYoD/xNYjUYNcfH0sp7NQr5phlvbubjbhKoGetFdmiQfXZabnrRVeCKZWyqekHs8
YwIDAQAB
-----END PUBLIC KEY-----`,
        nonce: '1', // place nonce here
        callback_url: 'http://loc.al/create' // place callback url here
      }
    }
  },
  methods: {
    start () {
      // eslint-disable-next-line no-undef
      Telegram.Passport.auth(this.auth, function (show) {
      })
    }
  }
}
</script>
