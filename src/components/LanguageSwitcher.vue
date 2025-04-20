<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, watch } from 'vue'

const { locale, t } = useI18n()
const selectedLocale = ref(locale.value)

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

// Load saved locale from localStorage
onMounted(() => {
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale && languages.some(lang => lang.code === savedLocale)) {
        selectedLocale.value = savedLocale
        locale.value = savedLocale
    }
})

// Watch for locale changes
watch(selectedLocale, (newLocale) => {
    if (newLocale && languages.some(lang => lang.code === newLocale)) {
        locale.value = newLocale
        localStorage.setItem('locale', newLocale)
    }
})

// Save locale to localStorage when changed
const updateLocale = (newLocale) => {
    if (newLocale && languages.some(lang => lang.code === newLocale)) {
        selectedLocale.value = newLocale
        locale.value = newLocale
        localStorage.setItem('locale', newLocale)
    }
}
</script>

<template>
    <div class="relative inline-block text-left">
        <select v-model="selectedLocale" @change="updateLocale($event.target.value)"
            class="block appearance-none bg-transparent border border-gray-300 rounded-3xl px-4 py-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.flag }} {{ lang.name }}
            </option>
        </select>
    </div>
</template>