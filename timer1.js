const args = process.argv;
let q=[];
for (var i=0;i<args.length;i++){
    let b = Number(args[i])
     let c = Number.isNaN(b)
      //console.log(c);
    if (!c){
        q.push(b)
    }
}
for (let i=0;i<q.length;i++){

    setTimeout(() => {
        process.stdout.write('.');
        
      }, 100*i*10);
    
    }
if (q.length===[]){
    console.log();
}

setTimeout(() =>{
 console.log("");
},q.length*1000);

