console.log("loop")
let a=1
while(a<=100){/*while loop */
    console.log(a);
    a++;
}
for(let i=1;i<=100;i++){/*for loop */
    console.log(i);
}

let obj={
    name: "dp",
    roll: 12,
    company :"amzone"

}
for (const key in obj) {/* it is for object */
    {
        const element = obj[key];
        console.log(key,element)
        
    }
}
for(const c of "obj"){/*it is for array */
    console.log(c)
}


let x=0;/*do while loop */
do {
    console.log(x);
    x++;
} while (x<=10);