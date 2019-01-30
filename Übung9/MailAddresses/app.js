const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});
let compressedLines = new Array();
let nachname = [];
let vorname = [];
let mail = [];
rl.on('line', (line) => {
    compressedLines.push(line);
});
rl.on('close', () => {
    for (i in compressedLines){
        for (j in compressedLines[i]){
            if (compressedLines[i].charAt(j) == ";"){
                nachname.push(compressedLines[i].substring(0,j));
                j++;
                vorname.push(compressedLines[i].substring(j, compressedLines[i].length));
            }
        }
    }
    getMailAdresses(vorname, nachname);
    console.log(mail);
})

function getMailAdresses(vorname, nachname){

    for (i in vorname){
        vorname[i] = vorname[i].toLowerCase();
        vorname[i] = vorname[i].replace("ä", "ae");
        vorname[i] = vorname[i].replace("ö", "oe");
        vorname[i] = vorname[i].replace("ü", "ue");
    }
    for (i in nachname){
        nachname[i] = nachname[i].toLowerCase();
        nachname[i] = nachname[i].replace("ä", "ae");
        nachname[i] = nachname[i].replace("ö", "oe");
        nachname[i] = nachname[i].replace("ü", "ue");
    }
    for (i in vorname){
        mail[i]=vorname[i].charAt(0) + "."+nachname[i] + "@" + "htl-leonding.ac.at"
    }

}