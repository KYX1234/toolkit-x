import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: './src/index.ts',
			formats: ['es', 'cjs'],
			fileName: 'index'
		},
		rollupOptions: {
			external: ['vue'],
			output: [
				{
					dir: 'dist',
					format: 'es' // ESM 格式
				},
				{
					format: 'cjs', // CJS 格式
					dir: 'dist' // 输出目录
				}
			]
		}
	}
})
