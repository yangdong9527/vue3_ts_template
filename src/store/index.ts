import { createStore } from 'vuex'
import { AppState, AppStore, AppModule as app } from './modules/app/index'

export interface RootState {
  app: AppState
}

export type Store = AppStore<Pick<RootState, 'app'>>

export const store = createStore<RootState>({
  modules: {
    app
  }
})

export function useStore(): Store {
  return store as Store
}
