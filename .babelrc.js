// {
// 	"exclude": "node_modules/**",
// 	"plugins": [
// 		"@babel/plugin-external-helpers",
// 		"@babel/plugin-transform-runtime"
// 	],
// 	"presets": [
// 		[
// 			"@babel/preset-env",
// 			{
// 				"modules": false,
// 				"targets": 
// 					"browsers": [
// 						"last 2 versions",
// 						"ie >= 9"
// 					]
// 				}
// 			}
// 		]
// 	]
// }
const { NODE_ENV } = process.env

module.exports = {
  presets: [
    '@babel/typescript',
    [
      '@babel/env',
      {
        targets: {
          browsers: ['ie >= 11']
        },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
        modules: false,
        loose: true
      }
    ]
  ],
  plugins: [
    // don't use `loose` mode here - need to copy symbols when spreading
    '@babel/proposal-object-rest-spread'
  ]
}

