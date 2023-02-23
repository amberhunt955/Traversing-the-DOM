//TODO: 1. Create a variable named (root) and select the html tag from the html file using querySelector
const root = document.querySelector("html");
//* add the code here

// console log the root variable
// check the difference between:
// root.children and root.childNodes
console.log(root);
console.log(root.children);
console.log(root.childNodes);

//TODO: 2. Create a variable named (body), using the root array from above assign the body element to the body variable.
const body = root.children[1];
//* add the code here

// log the variable (body)
console.log(body);

//TODO: 3. Create a variable named (h1), using the (body) variable fom above use the property (firstElementChild) to assign the h1 element to the (h1) variable.
const h1 = body.firstElementChild;
//* add the code here

// log the h1 variable to se the result
console.log(h1);

//TODO: 4. Create a variable named (ul), using the (h1) variable from above use the (nextElementSibling) property to assign the value to the (ul) variable.
const ul = h1.nextElementSibling;
//* add the code here

// Log the ul variable to se the result
console.log(ul);

//TODO: 5. Create a variable named (thirdLi), using the (ul) variable from above use (lastElementChild) property to assign the value to the (thirdLi) variable.
const thirdLi = ul.lastElementChild;
//* add the code here

// Log the text content of the li -> (Third li 🎃)
console.log(thirdLi.textContent);

//TODO: 6. Create a variable named (secondLi), using the (thirdLi) variable from above use (previousElementSibling) property to assign the value to the (secondLi) variable.
const secondLi = thirdLi.previousElementSibling;
//* add the code here

// Log the text content of the li -> (Second li ⛄)
console.log(secondLi.textContent);

//TODO: 7. Create a variable named (firstLi), using the (thirdLi) variable from above use (previousElementSibling.previousElementSibling) properties to assign the value to the (firstLi) variable.
const firstLi = thirdLi.previousElementSibling.previousElementSibling;
//* add the code here

// Log the text content of the li -> (First li 🦁)
console.log(firstLi.textContent);

//TODO: 8. Finally create a variable named (backToTheUl) using the thirdLi variable from above, use the (parentElement) property to assign th value to the (backToTheUl) variable.
const backToTheUl = thirdLi.parentElement;
//* add the code here

// Log the backToTheUl -> (ul)
console.log(backToTheUl);