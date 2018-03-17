var filterDir = require('./filterDirModular');

var dirPath = process.argv[2];
var extension = process.argv[3];

filterDir(dirPath, extension, (err, list) => {
  if (err) {
    console.log('An error happened:  ' + err);
    return err;
  }

  list.forEach((filename) => {
    console.log(filename);
  });
});
