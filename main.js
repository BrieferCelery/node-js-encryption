const crypto = require('crypto')
//advanced encryption system, 256 is amount of bits, 
// cbc is cipher block chaining which cuts up the data and encrpyts
// each block and chains them together
const algo = 'aes-256-cbc'


const pwd = 'good strong password for key'
const salt = crypto.randomBytes(32)
const key = crypto.scryptSync(pwd, salt, 32)


const iv = crypto.randomBytes(16)
const cipher = crypto.createCipheriv(algo, key, iv)

let ssn = '1111-000-000'
let encrypted = cipher.update(ssn, 'utf8', 'hex')
encrypted += cipher.final('hex')

const decipher = crypto.createDecipheriv(algo, key, iv)

let decrypted = decipher.update(encrypted, 'hex', 'utf8')

decrypted = decipher.final('utf8')

console.log(encrypted + ' ' + decrypted)