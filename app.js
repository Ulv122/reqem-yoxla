let a = prompt("metn daxil edin");
let b = a.replaceAll(/[a-z]/gi, '')
if (b === "number") {
    console.log('reqem var')
} else {
    console.log('reqem yoxdur');
}