module.exports = {
  presets: [['@babel/preset-typescript', { jsxPragma: 'h' }]],
  plugins: [
    ['@babel/transform-react-jsx', { pragma: 'h' }],
    '@babel/plugin-transform-modules-commonjs',
  ],
}
