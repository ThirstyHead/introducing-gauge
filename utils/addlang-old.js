const fs = require('fs');
const path = require('path');

if(process.argv.length <= 2){
  console.log('USAGE: npm run addlang en-us');
  process.exit(1);
}

const langDir = process.argv[2];
const rootDir = 'slides';
const slideDirs = getDirectories(rootDir);
for(let i=0; i<slideDirs.length; i++){
  let dirName = path.join(rootDir, slideDirs[i], langDir);
  fs.mkdirSync(dirName);
  console.log(`Creating ${dirName}`);
}



function getDirectories(srcPath){
  return fs.readdirSync(srcPath).filter( name => {
    return fs.lstatSync(path.join(srcPath, name)).isDirectory();
  });
}


