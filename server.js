const net = require('net');

let socket = [];

const server = net.createServer(function(socket) {

    socket.on('data', function(data) {

        let lineArray = [];
        let lines = data.toString().split('\r\n');
        lines.forEach((line) => lineArray.push(line));
        let langArray = lineArray[5].split('Accept: ');
        let lang = langArray[1];

        let names = lineArray.slice(11);


// function for bubble swapping

        function swap(arr, first_Index, second_Index){
            let temp = arr[first_Index];
            arr[first_Index] = arr[second_Index];
            arr[second_Index] = temp;
        }

//compare elements and swap if needed

        function nameSort(arr){
            let len = arr.length;
            if (arr[0].localeCompare(arr[1], 'de-DE') === 1) {
                swap(arr, 0, 1);
            }
            if (arr[1].localeCompare(arr[2], 'de-DE') === 1) {
                swap(arr, 1, 2);
            }
            if (arr[2].localeCompare(arr[3], 'de-DE') === 1) {
                swap(arr, 2, 3);
            }
            return arr;
        }

        for ( let i = 0; 10 > i; i++)
        {
            nameSort(names);
        }
//

        socket.write('HTTP/1.1 200 OK\r\n');
        socket.write('Content-Type: text/plain; charset=utf-8\r\n');
        socket.write('\r\n');
        socket.write(`${names[0]}\r\n`);
        socket.write(`${names[1]}\r\n`);
        socket.write(`${names[2]}\r\n`);
        socket.write(`${names[3]}\r\n`);
        socket.end();
    });

}).listen(3500);