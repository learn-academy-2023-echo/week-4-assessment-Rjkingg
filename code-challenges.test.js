// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const shuffleColors1 = ["yellow", "blue", "pink", "green"]
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(shuffleColors1))

    const colors2 = ["chartreuse","indigo","periwinkle","ochre","aquamarine", "saffron"]
    const shuffleColors2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(shuffleColors2))
  })
})



// b) Create the function that makes the test pass.
const shuffle = arr => { //define shuffle function using arrow syntax
  arr.shift() //remove first element using .shift() method
  for (let i = arr.length - 1; i > 0; i--) { //Iterate through the array using a reverse loop to shuffle the remaining elements
    const randomIndex = Math.floor(Math.random() * (i + 1)) // Generate a random index within the range of the current loop index using Math.random() and Math.floor()
    const temp = arr[i] //Swap the current element with the element at the randomly generated index to shuffle the array using destructuring assignment
    arr[i] = arr[randomIndex] 
    arr[randomIndex] = temp
  } //end loop
  return arr
}

shuffle(colors1)


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("returnTally", () => {
  it("returns end tally for upVotes and downVotes", () => {
    expect(returnTally(votes1)).toBe(11)
    expect(returnTally(votes2)).toBe(-31)
  })
})

// b) Create the function that makes the test pass.
const returnTally = votes => { // create function that that takes votes as an argument
  const { upVotes, downVotes } = votes //object destructuring to get upvotes and downvotes from the object vote
  return upVotes - downVotes // using subtration operator to subtract the upvotes from downvotes
}


const returnTally1 = returnTally(votes1)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
 //Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDuplicates", () => {
  it("removes duplicates from two arrays and returns a single array", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    const expectedOutput = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDuplicates(dataTypesArray1)).toEqual(expectedOutput)
    expect(noDuplicates(dataTypesArray2)).toEqual(expectedOutput)
  })
})

// b) Create the function that makes the test pass.

const noDuplicates = (...arrays) => { // define function, use spread operator to allow multiple arrays at once
  const joinedArray = arrays.reduce((result, array) => { //using .reduce() method to iterate over each element of array parameter 
    return result.concat(array) //  .concat() method to combine current array with accumulated result and assign it to joinedArray
  }, [])
  const newArray = [] //initialze an emty array named newArray
  for (const value of joinedArray) { //iterate through the joined array using a for loop
    if (!newArray.includes(value)) { // kusing .includes method to check if newArray doesnt alresdy have the already included value. bang operator checks condition and if the value is not included, sets condition to true if not included and false if it is and code within this block will be skipped
      newArray.push(value) // using .push() method to push the current value to the newArray
    }
  }

  return newArray // return the newArray, which has elements from the input arrays without duplicates
}


const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]

const resultArray1 = noDuplicates(dataTypesArray1) //const resultArray1 is being declared and the function (noDuplicates) is being called, with dataTypesArray1 being passed as an argument