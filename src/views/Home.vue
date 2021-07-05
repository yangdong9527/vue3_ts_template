<template>
  <div class="home">This is Home page</div>
</template>

<script lang="ts">
import { AppActionType } from '@/store/modules/app/actions'
import { MutationsKey } from '@/store/modules/app/mutations'
import { defineComponent } from 'vue'
import { useStore } from '../store/index'
import { login } from '@/api/user'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    store.dispatch(AppActionType.CHANGE_ISLOGIN, false)
    store.commit(MutationsKey.CHANGE_ISLOGIN, true)
    login({ username: '123' })
      .then(res => {
        const data = res.data.code
        console.log(data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
})
</script>
