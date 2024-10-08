// Reverse String
// let str = "hello world" -> dlrow olleh
                        // -> world hello
let str = "hello world"
function reverseStr(str){
    // return str.split("").reverse().join(""); // dlrow olleh
    return  str.split(" ").reverse().join(" ");  // world hello
}

console.log(reverseStr(str))