let a = prompt("Mətn daxil edin");
let b = a.replaceAll(/[^0-9]/g, '');
console.log(b);
for (let i = 0; i < b.length; i++) {
    if (!isNaN(b[i])) {
        console.log('Rəqəm var');
        break;
    }
}
if (b.length === 0) {
    console.log('Rəqəm yoxdur');
}
