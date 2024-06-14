<template>
    <select
        v-model="$i18n.locale"
        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
        @change="onSwitchLocale"
    >
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="tm">TM</option>
    </select>
</template>

<script setup>
// Imports

// Uses

// Refs

// Props & Emit

// Computed

// Methods
function onSwitchLocale(e) {
    const newLocale = e.target.value
    document.querySelector('html').setAttribute('lang', newLocale)
    localStorage.setItem('user-locale', newLocale)
}

// Hooks

</script>

<style scoped>

</style>
