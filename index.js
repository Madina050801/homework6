var number = [2, 1, 5, 3, 'apple', 8, 4, 12, 6, 10];
var fruit = ['apple', 12, 'Ananas', 'Orange', 'Kiwi']

//1-misol
let a_count=0;
let result=fruits.map(function(item){
   for (let i=0; i<item.length; i++){
       if(item[i]=='a' || item[i]=='A'){
           a_count++;
       }
    }
});
console.log(a_count);

let b_count=0;
let result=fruits.map(function(item){
   for (let i=0; i<item.length; i++){
       if(item[i]=='b' || item[i]=='B'){
           b_count++;
       }
    }
});
console.log(b_count);

//2-misol
// var count=0;
// for(i=0; i<number.length; i++){
//     if(typeof i == 'number'){
//         count+=i
//     } 
// }
// console.log(count);

//3-misol
// console.log(number.sort((a,b) => a-b));
var res = number.sort((a,b) => {
    return a[1];
});
console.log(res);



//4-misol
// var toqConunt=0;
// var juftCount=0;
// for(i=0; i<number.length; i++){
//     if(typeof i == 'number' && i%2==0){
//         juftCount+=i
//     } 
//     if(typeof i == 'number' && i%2==1){
//         toqConunt+=i
//     } 
// }
// console.log(juftCount);
// console.log(toqConunt);

//5-misol
// for(i=(number.length)-1; i>=0; i--){
//     console.log(number[i]);
// }




