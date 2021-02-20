const srcPath = './app'
const distPath = './dist'
const nodePath = './node_modules'

let envOptions = {
	string: 'env',
	default: {
		env: 'dev',
	},
	html: {
		src: [
			`${srcPath}/**/*.html`,
			`${srcPath}/**/*.pug`,
			`!${srcPath}/**/_*.pug`
		],
		path: distPath
	},
	style: {
		src: [
			`${srcPath}/assets/style/**/*.scss`,
			`${srcPath}/assets/style/**/*.sass`,
		],
		path: `${distPath}/assets/css`
	},
	javascript: {
		src: [
			`${srcPath}/assets/js/**/*.js`
		],
		concat: 'all.js',
		path: `${distPath}/assets/js`
	},
	vendors: {
		src: [
			// `${nodePath}/jquery/dist/**/jquery.min.js`,
			// `${nodePath}/axios/dist/**/axios.min.js`,
			'.'
		],
		concat: 'vendors.js',
		path: `${distPath}/assets/js`,
	},
	img: {
		src: [
			`${srcPath}/assets/img/**/*`,
		],
		path: `${distPath}/assets/img`
	},
	clean: {
		src: distPath
	},
	browserDir: distPath,
	deploySrc: `${distPath}/**/*`
}

exports.envOptions = envOptions