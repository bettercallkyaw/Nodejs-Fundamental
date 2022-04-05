// const person=require('./person');

// console.log(person.fullName);
// console.log(person.hobbies[0]);
// console.log(person.links[1]);

////////////////////////////////
// const Person=require('./person');
// const person1=new Person('bob smith','bob@gmail.com',33);

// console.log(typeof person1);
// person1.greeting();

///////////////////////////////
// const Logger=require('./logger');

// const logger1=new Logger();

// logger1.on('message',data=>console.log('Called Listener',data));

// logger1.log('hello');
// logger1.log('hi');
// logger1.log('nice');

///////////////////////////////
const http = require('http');
const fs = require('fs');
const path = require('path');

const server=http.createServer((req,res)=>{
    //console.log(req.url);

    // if(req.url==='/'){
    //     fs.readFile(
    //         path.join(__dirname,'public','index.html'),
    //         (err,content)=>{
    //             if (err) throw err;
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.end(content);
    //         }
    //     );
    // }

    // if(req.url==='/about'){
    //     fs.readFile(
    //         path.join(__dirname,'public','about.html'),
    //         (err,content)=>{
    //             if (err) throw err;
    //             res.writeHead(200,{'Content-Type':'text/html'});
    //             res.end(content);
    //         }
    //     );
    // }

    // if(req.url==='/users/api'){
    //     const users=[
    //         {
    //             id:1,
    //             fullName:'bob smith',
    //             email:'bob@gmail.com'
    //         },
    //         {
    //             id:2,
    //             fullName:'john doe',
    //             email:'john@gmail.com'
    //         }
    //     ];

    //     res.writeHead(200,{'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
    //}

    //built file path
    let filePath=path.join(
        __dirname,'public',req.url==='/'?'index.html':req.url
    );

    //extension of file
    let extname=path.extname(filePath);

    //initial content type
    let contentType='text/html';

    //check ext and set content type
    switch(extname){
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType='text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType='image/jpg';
            break;                
    }

    //read file
    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code=='ENOENT'){
                //page not found
                fs.readFile(
                    path.join(__dirname,'public','404.html'),
                    (err,content)=>{
                        if (err) throw err;
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.end(content,'utf8');
                    }
                );
            }else{
                //some server error
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
        }else{
            //success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8');
        }
    });

    // console.log(filePath);
    // res.end();
});

const PORT=process.env.PORT||8000;
server.listen(PORT,()=>console.log(`server running on ${PORT}`));