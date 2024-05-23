<template>
    <div id="locale-switcher">
        {{ $t('locale.switch') }}

        <ul>
            <li v-for="localeItem in localesList" @click="switchLocale(localeItem)">
                {{ localeItem }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import locales from '@/i18n/locales';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const localesList = computed(() => Object.keys(locales));

const switchLocale = (localeString) => {
    locale.value = localeString;
}
</script>

<style scoped>
#locale-switcher {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
}
</style>
