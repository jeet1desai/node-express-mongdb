let os = require('os');
console.log(os);

// x64 os
console.log(os.arch());

// platform - win32
console.log(os.platform());

//Wifi Details
console.log(os.networkInterfaces());

// CPU info
console.log(os.cpus());

// endianness of the CPU : 'BE' for big endian and 'LE' for little endian.
console.log(os.endianness());

// free system memory
console.log(os.freemem());

//current user's home directory
console.log(os.homedir());

//host name of the os
console.log(os.hostname());

// os version
console.log(os.release());

// total of system memory
console.log(os.totalmem());