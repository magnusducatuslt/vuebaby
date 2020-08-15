import { generateWallet } from 'minterjs-wallet'

export const state = () => ({
  wallet: null,
  policy: false,
  userdata: null,
  loggedId: false,
  profile: null
})

export const mutations = {
  SET_WALLET_INSTANCE (state, instance) {
    state.wallet = instance
  },
  TOGGLE_POLICY (state) {
    state.policy = !state.policy
  },
  SET_USERDATA (state, data) {
    state.userdata = data
  },
  SET_POLICY (state, value) {
    state.policy = value
  },
  SET_LOGGED_IN (state) {
    state.loggedId = true
  }
}

export const actions = {
  createWallet (context) {
    return new Promise((resolve, reject) => {
      const id = context.state.userdata ? context.state.userdata.id : null
      if (id) {
        const wallet = generateWallet()
        const address = wallet.getAddressString()
        context.commit('SET_WALLET_INSTANCE', wallet)
        return context.dispatch('registration', { address, id }).then(() => {
          resolve()
        })
      } else {
        reject(new Error('Fail'))
      }
    })
  },
  registration (context, { id, address }) {
    return this.$axios.post('registration', {
      id,
      address
    })
  },
  setUserData (context, data) {
    context.commit('SET_USERDATA', data)
    context.commit('SET_LOGGED_IN')
  },
  setPolicy (context, value) {
    context.commit('SET_POLICY', value)
  }
}
