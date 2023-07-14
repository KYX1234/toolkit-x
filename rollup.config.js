import typescript from 'rollup-plugin-typescript2'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'

export default {
	input: './src/index.ts',
	output: {
		file: path.resolve(__dirname, './dist/index.js'),
		format: 'umd',
		name: 'toolkit',
		sourcemap: false
	},
	plugins: [typescript(), terser(), resolve(['.js', '.ts'])]
}
