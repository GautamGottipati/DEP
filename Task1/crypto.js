var crypto = require("crypto");

var algorithms = ["sha1","md5"];

const fs = require("fs");
const resultfile = 'write.txt';

function generateHash(filename) {
  s = fs.ReadStream(filename);
  var crypts = [];
  for(i of algorithms){
    crypts.push(crypto.createHash(i));
  }
  s.on("data", function (data) {
    for(i in crypts){
      crypts[i] = crypts[i].update(data);
    }
  });
  s.on("end", function () {
    for(i in crypts){
      crypts[i] = crypts[i].digest("hex");
    }
    var buff = filename ;
    for(i of crypts){
      buff += "  "+ i;
    }
    buff+= " \n";
    // writing to file name : write.txt
    fs.appendFile(resultfile, buff, function (err) {
      if (err) throw err;
      console.log(filename + " hash saved!");
    });
  });
}
module.exports = {
  generateHash: generateHash,
};