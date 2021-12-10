function helloParam(...params) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Bonjour ";
    for(let param of params) {
        paragraph.innerHTML += param + " , ";
    }
    document.body.appendChild(paragraph);
    paragraph.innerHTML = paragraph.innerHTML.trim().slice(0 , -1);
}
helloParam("param1" , "param2", "param3");
helloParam("param1", "param2", "param3", "param4");

function paramNumber(...numbers) {
    let number1 = 0;
    for (let number of numbers) {
        if(Number.isInteger(parseInt(number))) {
           number1 += number ;
       }
    }
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = number1.toString();
}
paramNumber("2", "10", "5");
paramNumber("2", "10", "5", "8");
paramNumber("2", "10", "5", "8" , "15");

function paramNumberMultipl(...numbers) {
    let number1 = 5;
    let number2 = 11.76;
    for (let number of numbers) {
        if(Number.isInteger(parseInt(number))) {
            number1 *= number2;
        }
    }
    const div = document.createElement("div");
    div.innerHTML += Math.floor(number1);
    document.body.appendChild(div);
}

paramNumberMultipl("2", "10", "5");
paramNumberMultipl("2", "10", "5", "8");
paramNumberMultipl("2", "10", "5", "8" , "15");