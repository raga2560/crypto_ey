var crypto2 = require('crypto2');


async function test() {
var { privateKey, publicKey } = await crypto2.createKeyPair();

console.log ("privatekey="+privateKey.toString('hex'));
console.log ("publickey="+publicKey.toString('hex'));

}

test();
