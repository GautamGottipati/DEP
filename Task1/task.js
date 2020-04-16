const fs = require("fs");
const path = require("path");
const read = require('./printing.js')
const resultfile = 'write.txt';



const args = process.argv.slice(2);

var x = path.join(__dirname,args[0]);


// Incase you want to delete the file
// Deleting content from resultfile
fs.unlink(resultfile, function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log('File deleted!');
});  

var mydir = read.getAllFiles(x);

if(mydir){
    console.log("printed all");
}else{
    console.log("Incomplete");
}
