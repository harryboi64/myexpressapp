function loadImageToElement(imageElementToSet) {
    fetch('/viewImage')
        .then((res) => {
            return res.json();
        }).then((imageJsonData) =>  {
            const imageBase64Data = imageJsonData.imageData;
            imageToLoad.src = 'data:image/png;base64,' + imageBase64Data;
        });
}

const imageToLoad = document.querySelector('.customImage');

if (imageToLoad) {
    loadImageToElement(imageToLoad);
}

// const lowercaseNames = ['alex', 'harvey', 'robert'];

// lowercaseNames.forEach((name, idx) => {
//     lowercaseNames[idx] = name.toUpperCase();
// });
// console.log('Mutated data: ', lowercaseNames);

// const upperCaseNames = [];

// for(let i=0; i<lowercaseNames.length; i++) {
//     const lowerCaseNameToTransform = lowercaseNames[i];
//     const upperCasedName = lowerCaseNameToTransform.toUpperCase();
//     upperCaseNames.push(upperCasedName);
// }

// console.log('Method 1: ', upperCaseNames);

// const upperCaseNames2 = [];

// lowercaseNames.forEach((name) => {
//     upperCaseNames2.push(name.toUpperCase());
// });

// console.log('Method 2: ', upperCaseNames2);

// const upperCaseNames3 = lowercaseNames.map((name) => {
//     if (name === 'robert') {
//         return null;
//     }
//     return name.toUpperCase();
// });

// console.log('Method 3: ', upperCaseNames3);

/* const myData = ['alex', 'harvey', 'robert'];
const myNumber = 5;

function addToString(name) {
    return name + 'test';
}

console.log('Function result of add is: ', addToString(myNumber));
console.log('What is the value of the original myNumber?: ', myNumber);

function calculateArrayWithTestValue(someArray) {
    const copyOfArray = [...someArray];
    copyOfArray.push('test');
    return copyOfArray;
}

console.log('Result of function call: ', calculateArrayWithTestValue(myData));
console.log('My original data: ', myData);

*/


