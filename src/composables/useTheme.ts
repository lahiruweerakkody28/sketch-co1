import { ref } from 'vue'

const STORAGE_KEY = 'sketchco-theme'
const isDark = ref<boolean>(false)

function loadTheme(): boolean {
  const savedTheme = localStorage.getItem(STORAGE_KEY)

  if (savedTheme === 'dark') return true
  if (savedTheme === 'light') return false

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(value: boolean): void {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem(STORAGE_KEY, value ? 'dark' : 'light')
}

isDark.value = loadTheme()
applyTheme(isDark.value)

export function useTheme() {
  const toggleTheme = (): void => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  return {
    isDark,
    toggleTheme,
  }
}