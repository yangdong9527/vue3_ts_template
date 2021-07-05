import { Store, Module, CommitOptions } from 'vuex'
import { RootState } from '../../index'
import { state } from './state'
import { mutations, AppMutation } from './mutations'
import { actions, AppAction } from './actions'

export interface AppState {
  isLogin: boolean
}

export type AppStore<S = AppState> = Omit<Store<S>, 'commit' | 'dispatch'> & { commit<K extends keyof AppMutation, P extends Parameters<AppMutation[K]>[1]>(type: K, payload: P, options?: CommitOptions): ReturnType<AppMutation[K]> } & { dispatch<K extends keyof AppAction>(type: K, payload: Parameters<AppAction[K]>[1]): ReturnType<AppAction[K]> }

export const AppModule: Module<AppState, RootState> = {
  state,
  mutations,
  actions
}
