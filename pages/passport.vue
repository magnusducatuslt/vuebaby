<template>
  <div class="text-center mt-10">
    <v-btn class="primary" rounded @click="start">
      Подтвердить личность
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Passport',
  data () {
    return {
      tip: true,
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
        callback_url: 'https://ididntknowwhatyouheardaboutme.tk/create' // place callback url here
      }
    }
  },
  methods: {
    start () {
      const _self = this
      // eslint-disable-next-line no-undef
      Telegram.Passport.auth(this.auth, function (show) {
        _self.cl(show)
      })
    },
    cl (val) {
      if (!val) {
        window.close()
      }
    }
  }
}
</script>
