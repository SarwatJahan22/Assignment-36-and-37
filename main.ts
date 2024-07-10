// //Task 36
// // T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
// // a message that should be printed on the shirt. 
// // The function should print a sentence summarizing the size of the shirt and 
// // the message printed on it. Call the function.

function makeShirt(size: string, text: string): void {
    console.log(`/n you order a ${size} shirt that says ${text}`)
}

makeShirt('large', '"I love Typescript"')
makeShirt('medium', '"I need a big shirt"')



//Task 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by 
// default with a message that reads I love TypeScript. Make a large shirt and a 
// medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size: string = 'large', text: string = 'I love typescript'): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)

}

makeShirt();
makeShirt('medium')

//different message
makeShirt('small', 'I need a big shirt to wear')

