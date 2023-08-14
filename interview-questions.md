# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is programming that entirley consists of objects. Functional programming is different because it can consist of 

Researched answer: Object oriented programming revolves around objects. It differs from functional programming, because functional programming does not allow for storage in objects, while in OOP, all data is stored within objects

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A float in Ruby is a numeric value with a remainder, while an integer is a whole number

Researched answer:A flot is a number that has a decimal, while an integer does not

3. Ruby has an implicit return. What does that mean?

Your answer: A return that is assumed and does not have to be written out to be true

Researched answer: The return keyword becomes unnecessary when it is the last is in the final expression of specifed actions

4. What is a block in Ruby?

Your answer: A block in Ruby is a piece of code

Researched answer: A chunk of code that can be passed as an argument. They can be used for iteration or defining certain behaviors for methods

5. How do you extract a single value from a Ruby hash?

Your answer: You can call on the method

Researched answer: You can use the keys from the key value pairs

## Looking Ahead: Terms for Next Week

1. RSpec: A tool that helps programmers check if their code is working correctly by running tests they create.

2. Test-driven development: A software development approach where developers write tests for their code before writing the actual code

3. PostgreSQL:An open-source relational database management system. It allows you to store and manage large amounts of data in a structured way, making it easier to search, retrieve, and manipulate information.

4. CRUD:CRUD stands for Create, Read, Update, and Delete. It refers to the four basic operations used to manage data in a database or system.

5. HTTP:HTTP stands for Hypertext Transfer Protocol. It's the foundation of data communication on the internet. 



const shuffle = arr => {
  arr.shift();
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = temp
  }
  return arr
}

describe("shuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const shuffleColors1 = ["yellow", "blue", "pink", "green"]
    expect(shuffle(colors1)).toEqual(shuffleColors1)
    
  })
const colors2 = ["chartreuse","indigo","periwinkle","ochre","aquamarine", "saffron"]
const shuffleColors2 =  ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
expect(shuffle(colors2)).toEqual(shuffleColors2)
})
