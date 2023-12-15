const os = require("os")
const dns = require("dns")

console.log(os.cpus());
console.log(os.platform());
console.log(os.freemem());

dns.lookup("facebook.com",(error,address)=>{
    console.log(address);
})