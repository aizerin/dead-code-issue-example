const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
		filename: 'bundle.js',
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
                    plugins: ['minify-dead-code-elimination']
                },
			},
		],
	},
}