module.exports = {
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            components: './src/components'
          }
        }
      ]
    ]
  }
}
