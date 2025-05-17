
// ---------------------- FUNCTIONS - PART I ----------------------

// NUMBER 1

// var number =  parseInt(prompt("Eded:"))

//     for (let i = 0; i <= number; i++) {
//         if (number % i === 0) {
           
//             console.log(i)
            
//         }
//         }
    






// NUMBER 2

// var number =  parseInt(prompt("Eded:"))

// flag = 0
//     for (let i = 0; i <= number; i++) {
//         if (number % i === 0) {
//             flag ++
       
            
//         }
//         }
//           console.log(flag)






// NUMBER 3

// var str = prompt("Cumle")

// function upperStr(str){
    
    
//     return str.split(' ').map(word => word.toUpperCase()).join(' ');
     
// }
//     console.log(upperStr(str)); 






// NUMBER 4

// var num1 = prompt("Eded 1")
// var num2 = prompt("Eded 2")

// function quvvet(num1,num2){


//     return num1**num2

// }

// console.log(quvvet(num1,num2))





//NUMBER 5

// var str = prompt("Cumle")
 
// function convert(str) {
    

//     return str.split('').map(char => {

//   if (char === char.toLowerCase()) {
//         return char.toUpperCase()
//       }else {
//         return char.toLowerCase()
//       }

//     }).join('')

// }

// console.log(convert(str))




// ---------------------- ARRAY METHODS - PART II ----------------------

//NUMBER 1

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// // 1. #add 'Meat' in the beginning of your shopping cart if it has not been already added
// if (!shoppingCart.includes('Meat')) {
//   shoppingCart.unshift('Meat');
// }console.log(shoppingCart);


// // 2. #add Sugar at the end of you shopping cart if it has not been already added
// if (!shoppingCart.includes('Sugar')) {
//   shoppingCart.push('Sugar');
// }console.log(shoppingCart);


// // // 3. Remove 'Honey'
// shoppingCart.splice(4,1)
// console.log(shoppingCart);


// // 4. Modify 'Tea' to 'Green Tea'
// shoppingCart.splice(3,1,'Green Tea')
// console.log(shoppingCart);





// NUMBER 2

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]
// // countries.reverse()

// // countries.splice(2,2,'Azerbaijan')
// console.log(countries)


// NUMBER 3

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

//  var fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)



//NUMBER 4

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies)

// console.log(itCompanies.slice(3))
// console.log(itCompanies.slice(0,4))
// console.log(itCompanies.slice(3, -3))
// itCompanies.forEach(company => {
//   console.log(company.toUpperCase());
// });

// console.log(itCompanies)

// if (itCompanies.includes('Google')) {
//   console.log('Google');
// } else {
//   console.log('Company not found');
// }


// const olar = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   const company = itCompanies[i];
//   let oCount = 0;
  
//   for (let j = 0; j < company.length; j++) {
//     if (company[j].toLowerCase() === 'o') {
//       oCount++;
//     }
//   }
  
//   if (oCount > 1) {
//     olar.push(company);
//   }
// }
// console.log(olar);




