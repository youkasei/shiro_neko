import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'

import { type Theme } from '../types/global'

export const useAppStore = defineStore('appStore', () => {
  const theme = ref<Theme>('dark')
  const changeTheme = (mode?:Theme):void=>{
    if(mode){
        theme.value = mode
    }else{
        theme.value = theme.value==='dark'?'light':'dark'
    }
  }
  watchEffect(()=>{
    if(theme.value==='dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
  })

  return { theme, changeTheme}
})
