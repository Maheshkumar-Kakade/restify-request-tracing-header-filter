const restifyRequestHeaderFilter = require('restify-request-header-filter')

var DEFAULT_HEADERS = ['x-ot-span-context',
  'x-request-id',

  // zipkin headers
  'x-b3-traceid',
  'x-b3-spanid',
  'x-b3-parentspanid',
  'x-b3-sampled',
  'x-b3-flags',

  // jaeger header (for native client)
  'uber-trace-id']

module.exports = function (options) {
  let settings = Object.assign({}, options)
  settings.headersToFilter = settings.headersToFilter || DEFAULT_HEADERS
  settings.requestProperty = 'trackingHeaders'
  return restifyRequestHeaderFilter(settings)
}
