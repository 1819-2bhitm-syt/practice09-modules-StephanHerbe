const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on("close", () => {
    for (line of compressedLines){
        console.log(decompress(line));
    }
})

function decompress(line){
    let zeichen = line.charAt(0);
    let zeichenKette="";
    let anz = line.substring(1, line.length);
    anz = parseInt(anz);
    for (i = 0; i<anz; i++){
        zeichenKette += zeichen;
    }
    return zeichenKette;
}