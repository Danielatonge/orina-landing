<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]
</script>

<template>
    <div class="relative inline-block text-left">
        <select v-model="locale"
            class="block appearance-none bg-transparent border border-gray-300 rounded-3xl px-4 py-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.flag }} {{ lang.name }}
            </option>
        </select>
    </div>
</template>