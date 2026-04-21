import { ref } from 'vue'

const STORAGE_KEY = 'theme'

const isDark = ref<boolean>(false)

function loadTheme(): boolean {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'dark'
}

function applyTheme(value: boolean) {
  document.documentElement.classList.toggle('dark', value)
  localStorage.setItem(STORAGE_KEY, value ? 'dark' : 'light')
}

isDark.value = loadTheme()
applyTheme(isDark.value)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  return {
    isDark,
    toggleTheme,
  }
}