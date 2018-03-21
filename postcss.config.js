module.exports = {
  plugins: [
    require(`stylelint`),
    require(`postcss-reporter`)({clearReportedMessages: true}),
    require(`postcss-color-function`),
    require(`postcss-import`),
    require(`postcss-cssnext`), require('postcss-will-change'),
  ]
};
