require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images')

const images = [withOptimizedImages]
const sass = [withSass, {cssModules: true}]

module.exports = withPlugins([images, sass], {
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
})
