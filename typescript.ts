interface Person {
    lastName: string,
    firstName: string
}
let isBollean: boolean = false;
let list: Array<number> = [1, 2, 3, 4];
let x: [string, number] = ['123', 12];
isBollean = undefined;
// 枚举
enum Color{Red, Green, Blue};
let c: Color = Color.Green;
// console.log();



// 从元素下标1 开始编导
// enum Color1{Red = 1, Green, Blue};
// let d = Color1.Red;

// 或者全部元素都手动编导
enum Color1  {Red, Color, Green};
let colorName: string = Color1[1];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;


function person(): void {
    console.log(123);
}
function person1(): void{
    console.log(456);
    
}
person();
person1();





