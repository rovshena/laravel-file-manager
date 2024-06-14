import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost'
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        VueI18nPlugin({
            // locale messages resource pre-compile option
            include: resolve(dirname(fileURLToPath(import.meta.url)), './resources/js/Locales/**'),
        }),
    ],
});
