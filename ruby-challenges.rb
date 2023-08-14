# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# # # Expected output: '42 is even'
reposts3 = 221
# # # Expected output: '221 is odd'

# # Pseudo code:

def which_is_it num 
# Define a method that takes in a number parameter
    if num.even?
# Set up if statement, Use .even? method to check if num is even
         "#{num} is even"
# using string interpolation to display the expected output messages
    else
         "#{num} is odd"
   end
 end

p which_is_it()

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
 beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# Pseudo code:


def vowel string 
   # define a function called vowel that takes the parameter of a string
    vowels = 'AEIOUaeiou'
    #create a string called vowels for all vowels both upper and lower case
    empty_str = ''
    #initialize empty string so that the it can hold the modified string
    string.each_char do |char|
    #create a for loop using the .each method to iterate through each letter until the condition is met    
        unless vowels.include?(char)
    #Use unless keyword in this conditional statement. Code will execute if condition is false. followed by .include method
            empty_str += char
    # += operator to concatnate the char variable to the end of empty_str

        end
    end
    empty_str
    
end

p vowel()



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

 palindrome_test_case1 = 'Racecar'
# # # Expected output: 'Racecar is a palindrome'
 palindrome_test_case2 = 'LEARN'
# # # Expected output: 'LEARN is not a palindrome'
 palindrome_test_case3 = 'Rotator'
# # # Expected output: 'Rotator is a palindrome'

 # Pseudo code:

# define the method that takes a string as a parameter 
def backwards_check string
#use .downcase method to ensure words will be converted to all lowercase
    lower_case = string.downcase
# use an if statement and the comparison operator == to see if strings are equal to its reverse  
    if lower_case == lower_case.reverse
# use else statement / string interpolation to convey output
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end

p backwards_check()

#