const path = require('path')
const fs = require('fs')
const sitemap = require('sitemap')
require('dotenv').config()

function buildSitemapFile() {
  const url = {
    url: '/',
    changefreq: 'monthly',
    priority: 1,
  }

  const config = {
    hostname: process.env.HOSTNAME,
    cacheTime: 3600,
    urls: [url],
  }

  const xml = sitemap.createSitemap(config)
  fs.writeFileSync(path.resolve(__dirname, '../out/sitemap.xml'), xml.toString())
}

function moveFiles(files) {
  for (const file of files) {
    const src = path.resolve(__dirname, `../out/static/${file}`)
    const dest = path.resolve(__dirname, `../out/${file}`)
    fs.renameSync(src, dest)
  }
}

buildSitemapFile()
moveFiles(['robots.txt', '_redirects'])
