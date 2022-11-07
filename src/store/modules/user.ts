import { defineStore } from 'pinia'
import { UserState, RoleEnum } from '../types'

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        username: '张三',
        role: RoleEnum.Admin
    }),
    actions: {
      // 设置用户的信息
      setInfo(partial: Partial<UserState>) {
        this.$patch(partial);
      },
    }
})