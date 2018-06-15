const fs = require('fs');
const path = require('path');
const executable = require('executable');

const walkDir = (currentPath, fileTypes) => {
  const files = fs.readdirSync(currentPath);
  for(let index in files){
    let currentFile = path.join(currentPath, files[index]);
    if((fs.statSync(currentFile).isFile() && fileTypes.indexOf(path.extname(currentFile)) > -1) || executable.sync(currentFile)){
      //delete file
      fs.unlinkSync(currentFile);
    } else if(fs.statSync(currentFile).isDirectory()){
      //recursively traverse dir
      walkDir(currentFile, fileTypes);
    }
  }
}

const getFilesFromDir = (dir, fileTypes) => {
  walkDir(dir, fileTypes);
}

module.exports = getFilesFromDir("./", process.argv.slice(2));
