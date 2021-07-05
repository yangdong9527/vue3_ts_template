import { ActionTree } from 'vuex'
import { AppState } from './index'
import { RootState } from '../../index'
import { AppMutation, MutationsKey } from './mutations'

export enum AppActionType {
  CHANGE_ISLOGIN = 'CHANGE_ISLOGIN'
}

export type AppActionContext = {
  commit<K extends keyof AppMutation>(type: K, payload: Parameters<AppMutation[K]>[1]): ReturnType<AppMutation[K]>
}

export interface AppAction {
  [AppActionType.CHANGE_ISLOGIN]({ commit }: AppActionContext, value: boolean): void
}

export const actions: ActionTree<AppState, RootState> & AppAction = {
  [AppActionType.CHANGE_ISLOGIN]({ commit }, value) {
    commit(MutationsKey.CHANGE_ISLOGIN, value)
  }
}
