let spinnerEl = "|/-\\|/-\|/-\\|/-\|";
let timer = 0;
for(let item of spinnerEl){
    setTimeout(() => {
        process.stdout.write(`\r${item}`)
    }, timer += 300);
};
setTimeout(() => {
    console.log();
}, timer);