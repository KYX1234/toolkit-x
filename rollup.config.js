import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
	input: './src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs'
		}
	],
	plugins: [typescript(), terser(), commonjs(), resolve(['.js', '.ts'])]
}
