import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createI18n } from 'vue-i18n';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import en from './Locales/en.json'
import ru from './Locales/ru.json'
import tm from './Locales/tm.json'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const availableLocales = ['en', 'ru', 'tm']
const locale = localStorage.getItem('user-locale')

const i18n = createI18n({
    locale: availableLocales.includes(locale) ? locale : 'en',
    fallbackLocale: 'en',
    messages: { en, ru, tm }
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(i18n)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
