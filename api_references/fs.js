const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(
//     path.join(__dirname,'/newFolder'),
//     {},err=>{
//         if (err) throw err;
//         console.log('folder created...');
//     }
// );

//create and write to file
// fs.writeFile(
//     path.join(__dirname,'/newFolder','index.txt'),
//     'hello world',err=>{
//         if (err) throw err;
//         console.log('file create and write...');
//     }
// );

//Is file appended?
// fs.writeFile(
//     path.join(__dirname,'/newFolder','index.txt'),
//     'goodbye world',err=>{
//         if (err) throw err;
//         console.log('is file append?');
//     }
// );

//file append
// fs.appendFile(
//     path.join(__dirname,'/newFolder','index.txt'),
//     '.hello world',err=>{
//         if (err) throw err;
//         console.log('file append');
//     }
// );

//rename file
// fs.rename(
//     path.join(__dirname,'/newFolder','index.txt'),
//     path.join(__dirname,'/newFolder','app.txt'),
//     err=>{
//         if (err) throw err;
//         console.log('rename file.');
//     }
// );

//read file
fs.readFile(
    path.join(__dirname,'/newFolder','app.txt'),
    'utf-8',(err,data)=>{
        if (err) throw err;
        console.log(data);
    }
);