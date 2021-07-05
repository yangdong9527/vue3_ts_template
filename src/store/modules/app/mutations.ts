import { MutationTree } from 'vuex'
import { AppState } from './index'

export enum MutationsKey {
  CHANGE_ISLOGIN = 'CHANGE_ISLOGIN'
}

export interface AppMutation {
  [MutationsKey.CHANGE_ISLOGIN]: (state: AppState, value: boolean) => void
}

export const mutations: MutationTree<AppState> & AppMutation = {
  [MutationsKey.CHANGE_ISLOGIN](state, value) {
    state.isLogin = value
  }
}
