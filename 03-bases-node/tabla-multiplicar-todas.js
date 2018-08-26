const fs = require('fs')

for(let base = 1; base <= 65; base++) {

    let data = '';
    
    for(let i = 1; i<= 12; i++) {
    
        data += `${base} * ${i} = ${base * i}\n`;
        
    }
    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`el archivo tabla-${base}.txt ha sido creado`);
    });
}; 