const path = require('path')
const opn = require('opn')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./public/vue-ssr-server-bundle.json')
const clientManifest = require('./public/vue-ssr-client-manifest.json')
const resolve = file => path.resolve(__dirname, file)
const template = require('fs').readFileSync(resolve('./template.html'), 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})

const app = express()

app.use('/static', express.static(resolve('./public/static')))

app.get('*', (req, res) => {
    const context = { url: req.url }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        } else {
            res.end(html)
        }
    })
})

const port = 3000
app.listen(port, err => {
    if (err) {
        console.log(err)
        return
    }

    const url = `http://localhost:${port}`
    console.log(`\n Server running at ${url}!\n`)
    opn(url)
})
