const net = require('net');
const fs = require('fs');
const path = require('path');

const fileType = {
    html: 'text/html',
    txt: 'text/plain',
    js: 'application/javascript',
    css: 'text/css',
    jpg: 'image/jpeg',
    png: 'image/png'
};
const port = 8000;
const rootDirectory = path.join(__dirname, 'fantasy');

function requestHandler(stringReq, socket) {
    if(stringReq.match(/\n\r?\n\r?/)){
        let lines = stringReq.split(/\n/)[0].split(' ');

        if(lines[0] === 'GET'){
            return lines[1];
        } else {
            errorHandler(501,socket);
        }
    }
}

function errorHandler (error,socket) {
    switch (error){
        case 501:
            socket.write('HTTP/1.1 501 Not Implemented\n');
            socket.write('Content-Type: text/plain\n\n');
            socket.write('SORRY not implemented');
            socket.end();
            break;

        case 404:
            socket.write('HTTP/1.1 404 Not Found\n');
            socket.write('Content-Type: text/plain\n\n');
            socket.write('404 Not Found');
            socket.end();
            break;

        default:
            socket.write('HTTP/1.1 444 GG\n');
            socket.write('Content-Type: text/plain\n\n');
            socket.write('Snap, something went wrong!');
            socket.end();
            break;
    }
}

const server = net.createServer(socket => {
    socket.on('data', data => {
        let input = data.toString();
        let request = requestHandler(input,socket);

        if(request !== undefined){
            let file = path.join(rootDirectory, request);
            let type = fileType[path.extname(file).slice(1)] || 'text/plain';
            
            const fileSystem = fs.readFile(file,(error, data) => {
                if (error) {
                    errorHandler(404,socket);
                } else {
                    socket.write('HTTP/1.1 200 OK\n');
                    socket.write(`Content-Type: ${type}\n\n`);
                    socket.write(data);
                    socket.end();
                }
            });
            console.log(file);
        }
    });
}).listen(port);