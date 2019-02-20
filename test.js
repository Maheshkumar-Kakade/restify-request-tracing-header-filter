const restify = require('restify')
const os = require('os')
const server = restify.createServer()
const requestTrackingHeaderFilter = require('./index')

server.pre(requestTrackingHeaderFilter())
server.get('/healthCheck', healthCheck)
function healthCheck (req, res, next) {
  console.log(req.trackingHeaders)
  res.send({hostname: os.hostname(), os: os.release()})
  return next()
}

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url)
})
