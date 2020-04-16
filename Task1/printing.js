const fs = require("fs");
const path = require("path");
var gHash = require('./crypto.js');

function getAllFiles(dirPath,filesArray){
    try{
        let files = fs.readdirSync(dirPath);

        filesArray = filesArray || [];
        files.forEach(function(file){
            var myPath = path.join(dirPath,file);
            var stats = fs.statSync(myPath);
            if(stats.isFile()){
                gHash.generateHash(myPath);
            }else{
                console.log("Inside directory",file);
                let m1ydata = `>${file} \n`;
                getAllFiles(myPath);
            }
            
        });

    }catch(e){
        console.log(e);
        return false;
    }
    
    return true;
}

module.exports = {
    getAllFiles:getAllFiles,
}