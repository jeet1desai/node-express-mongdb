const fs = require('fs');

// r+ : open the file for reading and writing
// w+ : open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
// a : open the file for writing, positioning the stream at the end of the file. The file is created if not existing
// a+ : open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing

// file -> CRUD
// read
let buffer = fs.readFileSync('abc.js');
console.log(buffer.toString());

// create
// create if not exist
// fs.writeFileSync('abc.txt', 'w');
// write
fs.writeFileSync('abc.txt', 'Hello World!!');
// replace
// fs.writeFileSync('abc.txt', 'Again !!');

// update
fs.appendFileSync('abc.txt', ' Again');

// create folder 
fs.mkdirSync('sample');
fs.writeFileSync('sample/sample1.txt', 'w');
fs.writeFileSync('sample/sample2.txt', 'w');

// read folder
console.log(fs.readdirSync('sample'));

// delete file
fs.unlinkSync('sample/sample2.txt');

// delete empty folder
fs.rmdirSync('sample');


//if file exist at a path => true/false
console.log(fs.existsSync('abc.js'))
console.log(fs.existsSync('abcd.js'))

// curr folder
console.log(__dirname);

// curr file
console.log(__filename);

let detail = fs.lstatSync('abc.js');
let detail = fs.lstatSync('sample');
console.log(detail.isFile()); 
console.log(detail.isDirectory()); 
stats.isSymbolicLink() //if the file is a symbolic link
stats.size //1024000 //= 1MB size


// readFile same writeFile
fs.readFile('abc.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
try {
    const data = fs.readFileSync('abc.txt', 'utf8')
    console.log(data)
} catch (err) {
    console.error(err)
}

// appendFile
const content = 'Some content!'
fs.appendFile('file.log', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //done!
})

// rename folder
fs.rename('/Users/joe', '/Users/roger', err => {
    if (err) {
        console.error(err)
        return
    }
})


// Access
fs.access('abc.txt', fs.constants.R_OK, (err) => {
    console.log('\n> Checking Permission for reading the file');
    if (err)
        console.error('No Read access');
    else{
        console.log('File can be read');
        let read = fs.readFileSync('abc.txt');
        console.log(read.toString());
    }
});


// fs.access(): check if the file exists and Node.js can access it with its permissions
// fs.appendFile(): append data to a file. If the file does not exist, it's created
// fs.chmod(): change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()
// fs.chown(): change the owner and group of a file specified by the filename passed. Related: fs.fchown(), fs.lchown()
// fs.close(): close a file descriptor
// fs.copyFile(): copies a file
// fs.createReadStream(): create a readable file stream
// fs.createWriteStream(): create a writable file stream
// fs.link(): create a new hard link to a file
// fs.mkdir(): create a new folder
// fs.mkdtemp(): create a temporary directory
// fs.open(): set the file mode
// fs.readdir(): read the contents of a directory
// fs.readFile(): read the content of a file. Related: fs.read()
// fs.readlink(): read the value of a symbolic link
// fs.realpath(): resolve relative file path pointers (., ..) to the full path
// fs.rename(): rename a file or folder
// fs.rmdir(): remove a folder
// fs.stat(): returns the status of the file identified by the filename passed. Related: fs.fstat(), fs.lstat()
// fs.symlink(): create a new symbolic link to a file
// fs.truncate(): truncate to the specified length the file identified by the filename passed. Related: fs.ftruncate()
// fs.unlink(): remove a file or a symbolic link
// fs.unwatchFile(): stop watching for changes on a file
// fs.utimes(): change the timestamp of the file identified by the filename passed. Related: fs.futimes()
// fs.watchFile(): start watching for changes on a file. Related: fs.watch()
// fs.writeFile(): write data to a file. Related: fs.write()
