export default function (store) {
  const policy = !!localStorage.getItem('policy')
  store.dispatch('app/setPolicy', policy)
  const userdata = JSON.parse(localStorage.getItem('userdata'))
  store.dispatch('app/setUserData', userdata)
  // Подписываемся на события применения мутаций, синкаем в localStorage изменения состояния
  store.subscribe((mutation) => {
    if (mutation.type === 'app/TOGGLE_POLICY') {
      localStorage.setItem('policy', store.state.app.policy)
    }

    if (mutation.type === 'app/SET_USERDATA') {
      const payload = JSON.stringify(mutation.payload)
      localStorage.setItem('userdata', payload)
    }
  })
}
