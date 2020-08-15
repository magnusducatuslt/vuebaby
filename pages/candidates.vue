<template>
  <div>
    <v-card>
      <v-card-title class="mb-0 pb-0">
        Выберите кандидата
      </v-card-title>
      <v-card-text>
        <v-radio-group v-model="active" column>
          <v-radio
            v-for="cand in candidates"
            :key="cand.id"
            :label="cand.name"
            :value="cand.id"
          />
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="vote">
          Голосовать
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// const minter = new Minter({ apiType: 'node', baseURL: 'https://minter-node-1.testnet.minter.network/' })
export default {
  name: "Candidates",
  asyncData(context) {
    return context.$axios.get("candidates").then((res) => {
      return { candidates: res.data.message };
    });
  },
  data() {
    console.log("PAYLOAD", {
      chain_id: 2,
      coin: "IGCOINBABY",
      money: "MNT",
      txParamsPayment: {
        nonce: 0,
        chainId: this.chain_id,
        type: "0x01",
        data: {
          to: this.candidate_address,
          value: 1,
          coin: this.coin,
        },
        gasCoin: this.money,
        payload: "custom message",
      },
    });
    return {
      chain_id: 2,
      coin: "IGCOINBABY",
      money: "MNT",
      txParamsPayment: {
        nonce: 1,
        chainId: this.chain_id,
        type: "0x01",
        data: {
          to: this.candidate_address,
          value: 1,
          coin: this.coin,
        },
        gasCoin: this.money,
        payload: "custom message",
      },
    };
  },
  computed: {
    privateKey: {
      get() {
        console.log("xxx ", this.$store.state.app.wallet);
        const wallet = this.$store.state.app.wallet;
        return wallet ? wallet.getPrivateKeyString() : null;
      },
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.minter = new minterSDK.Minter({
      apiType: "node",
      baseURL: "https://minter-node-1.testnet.minter.network/",
    });
    this.minterWallet = minterWallet;
  },
  methods: {
    vote() {
      console.log(this.txParamsPayment);

      const id = this.active;
      const candidat = this.candidates.find((x) => x.id === id);

      const SENDER_SEED =
        "crop alcohol crack ticket viable point tooth broccoli powder better thought inject";
      const wallet = this.minterWallet.walletFromMnemonic(SENDER_SEED);
      const self = this;
      /*   console.log(this.minterWallet);
      const { txParamsPayment, privateKey } = this;
      console.log(this);*/
      /*
      this.minter
        .getNonce(wallet.getAddressString())
        .then((nonceForReciever) => {
          self.minter
            .postTx(
              {
                nonce: nonceForReciever,
                chainId: 2,
                type: "0x01",
                data: {
                  to: candidat.address,
                  value: 1,
                  coin: "IGCOINBABY",
                },
                gasCoin: "MNT",
                payload: "custom message",
              },
              { privateKey: wallet.getPrivateKeyString() }
            )
            .then((txHash) => {
              console.log(txHash);
              self.$toast.success("Голос учтен");
            })
            .catch((e) => {
              console.log(e);
              self.$toast.error("Произошла ошибка");
            });
            
        });
        */
    },
  },
};
</script>
