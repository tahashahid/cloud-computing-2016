
// const http = require('http');


// http.createServer((req, res) => {
//     res.end('test');
// })
// .listen(3000, () => {
//     console.log('running')
// });



// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000/`);
// });

// console.log(http)


// var http = require('http');


// http.createServer((req, res) => {
//     console.log('abcd')
//     var a = 0;

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>first line</h1>')
//     res.write('second line')
    
//     setInterval(function(){
//         res.write((a++).toString());
//         res.write('</br>')
//     }, 1000);
//     // res.end('hello world')
// })
// .listen(3000, () => {
//     console.log('running')
// });



var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var a = 0;

http.createServer((req, res) => {
    console.log(req.url, req.method)
    var urlarr = req.url.split('?'); 
    var url = urlarr[0];
    var qp = {};
    if( urlarr[1] ){
        qp = qs.parse( urlarr[1] )
    }
    console.log(qp);
    console.log(qp.user);
    if(url.indexOf("/static") == 0){
        renderStaticFile(url, req, res);
    }
    else if(url == '/home'){
        res.setHeader('Content-Type', 'text/html');
        // res.write('<h1>home</h1>')
        fs.readFile('./views/home.html', (err, data) => {
            if (err) {
                console.log(err)
                res.write(err)
            } else {
                data = (data.toString()).replace(/{{user}}/g, qp.user);
                console.log(data)
                res.write(data);
            }
            res.end();
        });
    }
    else if (url == '/about') {
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>about</h1>')
            res.end();
        } else if (url == '/counter') {
            res.write(a.toString());
            a++;
            res.end();
        } else {
            res.write('page not found!!')
            res.end();
        }

})
.listen(3000, () => {
    console.log('running')
});




function renderStaticFile(path, req, res){
    fs.readFile(__dirname + path, (err, data) => {
            if (err) {
                console.log(err)
                res.write(err)
            } else {
                console.log(data)
                res.write(data);
            }
            res.end();
        });
}



