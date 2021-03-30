const crypto = require('crypto')

// 响应微信验证Token的请求
function verifyToken (ctx) {
  const { signature, timestamp, nonce, echostr } = ctx.query
	const token = 'abc'
	const arr = [token, timestamp, nonce]
	let str = arr.sort().join('')
	const shasum = crypto.createHash('sha1')
	shasum.update(str)
	str = shasum.digest('hex')
	if (str === signature) {
		ctx.body = echostr
	} else {
		return false
	}
}

module.exports = {
  verifyToken
}