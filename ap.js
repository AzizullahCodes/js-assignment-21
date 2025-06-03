// js practice assignment 
// ques no 1
// 1. Grading System
// Write a program that takes a student’s percentage as input and prints their grade:

// If percentage is 90 or above, print "Grade A".

// If it's between 80 and 89, print "Grade B".

// If it's between 70 and 79, print "Grade C".

// If it's below 70, check:

// If it's 60 or above, print "Grade D".

// Otherwise, print "Fail".
// ans 
// let totalMarks = 500;
// let enterMathObtainedMarks = +prompt('enter your marks obtainded in math out of 100');
// let enterScieceMarks = + prompt('Enter you science obtained marks');
// let enterEnglishMarks = +prompt('Enter your science marks');
// let enterBioMarks = +prompt('enter your bio obtained marks');
// let enterPhysiceMarks = + prompt('Enter your obtained marks physices');
// let totalObtainedMarks  = enterBioMarks + enterEnglishMarks + enterMathObtainedMarks + enterPhysiceMarks + enterScieceMarks;
// let percentage = (totalObtainedMarks / totalMarks) * 100;
// if(percentage >= 90){console.log('You got A+ grade')}
// else if(percentage >= 80){console.log('You got A grade')}
// else if(percentage >= 70){console.log('you got B grade')}
// else if(percentage >= 60){console.log('you got grade C')}
// else if(percentage >= 35){console.log('you got grade D ')}
// else if(percentage < 35){console.log('you are failed')}
// else{console.log('Invalid entery')}
// ________________________________________________________________________________________
// ques no 2
// 1. Login Verification
// Ask the user to input a username and a password.
// If the username is "admin" and the password is "1234", print "Login successful".
// Otherwise, print "Invalid credentials".
// ans 
// let userName = prompt('enter your name');
// let password = +prompt('enter password');
// let user = 'aziz';
// let code = 234;
// if(userName === user && password === code){console.log('login successful')}
// else{console.log('login unsuccessful')} 
// _________________________________________________________________________________________
// ques no 3 
// output 
// AHMED 
// HMEDA
// MEDAH
// EDAHM
// DAHME
// AHMED
//ans 

// let ques = 'AHMED';
//  console.log(ques);
// let copy = ques.slice(1);
//  console.log(copy);
// let add = copy + 'A';
//  console.log(add);
// let newCopy = add.slice(1);
//  console.log(newCopy);
// let add2 = newCopy + 'H';
//  console.log(add2);
// let copy3 = add2.slice(1);
// console.log(copy3);
// let add3 = copy3 + 'M';
// console.log(add3);
// let copy4 = add3.slice(1);
// console.log(copy4);
// let add4 = copy4 + 'E';
// console.log(add4);
// let copy5 = add4.slice(1);
// console.log(copy5);
// let final = copy5 + 'D';
// console.log(final);
// ________________________________________________________________________________________________________
// ques no 4 
// let cityToCheck = prompt('enter your city');
//  cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ['karachi','islamabad','rawalpindi','mianwali'];
// for(var i = 0; i<=cityToCheck.length; i++){if(cityToCheck === cleanestCities[i]){
//     console.log('it is one of the cleanest cities')
// }}
// ____________________________________________________________________________________________________
// ques no 5
// toUpperCase()
//  let cityToCheck = prompt('enter your city');
//  cityToCheck = cityToCheck.toUpperCase();
//  let cleanestCities = ['KARACHI','RAWALIPINDI','MIANWALI'];
//   let flag = false;
// for(let i = 0; i <= cleanestCities.length; i++){if(cityToCheck === cleanestCities[i])
// {flag = true;
//     break;
// }
// }
// if(flag){console.log('city is present in list')}
// else{console.log('city is not present in list')}
// ____________________________________________________________________________________________________
// ques no 6 
// aZizullAh change into Azizullah
// ans 
//  let name = 'aZizullAh';
//  let firstChar = name.slice(0,1);
//  let otherChar = name.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChar = otherChar.toLowerCase();
//  let newName = firstChar + otherChar;
//  console.log(newName);
// _________________________________________________________________________________________
// ques no 7 
//
// ans 
// let text = 'pakistan is my homeland';
// let search = prompt('enter word you want to search');
// search = search.toLowerCase();
// let flag = false;
// for(let i = 0; i<=text.length;i++){if(text.slice(i,i+ search.length)=== search)
// {flag = true;
//     break;
//  }
// }
// if(flag){console.log(search,'is available in text')}
// else{console.log(search,'is not available in text')}
// _____________________________________________________________________________________
// ques no 8
// charAt(),firstChar & LastChar
// let name = 'azizullah';
// let firstChar = name.slice(0,1);
// console.log(firstChar);
// let lastChar = name.indexOf('h');
// console.log(lastChar);
// let last = name.slice(8);
// console.log(last)
// let first = name.charAt();
// console.log(first);
// let last = name.charAt(name.length - 1);
// console.log(last)
// _____________________________________________________________________________________
// ques no 9 
// replace & replaceAll
// ans 
// let name = 'Aziz';
// name = name.replace('z','u');
// console.log(name)
// let name = 'Aziz';
// name= name.replaceAll('z','m');
// console.log(name)
// _____________________________________________________________________________________
// ques no 10 
// Basic Replace
// Replace the word "cat" with "dog" in the string:
// "The cat sat on the cat mat."
// ans 
// let str = 'The cat sat on the cat mata';
// str = str.replace('cat','dog');
// console.log(str);
// // let all = str.replaceAll('cat','dog');
// // console.log(all)
// let global = str.replaceAll(/cat/g,'dog');
// console.log(global)
// ______________________________________________________________________________________
// ques no 11 
// Using Regular Expressions
// Replace only the first occurrence of the word "apple" with "orange" in:
// "apple banana apple mango"
// ans 
// let str = 'apple bnana apple mango';
// str = str.replace('apple','orange');
// console.log(str)
// ________________________________________________________________________________
// ques no 12 
// Mask Email Domain
// Replace the domain of an email address with "***" in:
// "user@example.com"
// ans 
// let domain = 'user@example.com';
// domain = domain.replace('user','***');
// console.log(domain)
// ______________________________________________________________________________________
// ques no 13 
// Format Number String
// Replace all commas (",") with dots (".") in:
// "1,234,567,890"
// let str = '1,234,567,890';
// str = str.replaceAll(',','.');
// console.log(str);
// ________________________________________________________________________
// ques no 14 
// Remove All Spaces
// Remove all the spaces from the string:
// "Hello World This Is JavaScript"
// ans 
// let str ='Hello World This is Javascript';
// str = str.replaceAll(' ','');
// console.log(str)
// ________________________________________________________________________________
// ques no 15 
// check first character 
// ans 
// let enterWord = prompt('enter a word');
// enterWord = enterWord.toLowerCase();
// if(enterWord.charAt() === 'a' ||
//  enterWord.charAt() === 'e' ||
//  enterWord.charAt() === 'i' ||
// enterWord.charAt() === 'o' ||
// enterWord.charAt() === 'u'){console.log(enterWord.charAt(),'is vowel')}
// else{console.log(enterWord.charAt(),'is not vowel')}
// ____________________________________________________________________________________________
// ques no 16 
// lastCharacter 
// let sentence = prompt('enter a sentence');
// let lastChar = sentence.charAt(sentence.length-1);
// console.log('the last character is :' + lastChar)
// ______________________________________________________________________
// ques no 17 
// replace 
// let word = prompt('enter a word');
// let first = word.charAt();
// console.log(first);
// let otherChar = word.slice(1);
// console.log(otherChar);
// first = first.replace(first,'*');
// let newWord = first + otherChar;
// console.log(newWord);
// _________________________________________________________________________________________ 
// ques 18 
// charAt practice
// solution
// let enterFirstWord = prompt('enter first word');
// let enterSecondWord = prompt('enter Second word');
// enterFirstWord = enterFirstWord.toLowerCase();
// enterSecondWord = enterSecondWord.toLowerCase()
// let charatFirstWord = enterFirstWord.charAt();
// console.log(charatFirstWord);
// let charAtSecondWord = enterSecondWord.charAt();
// console.log(charAtSecondWord);
// if(charatFirstWord === charAtSecondWord){console.log('match')}
// else{console.log('not match')}
// _____________________________________________________________________________________
// ques no 19 
// // ✅ Question 1: Basic Match
// Question:
// You are given a sentence:
// "I am learning JavaScript today."
// Check if the word "JavaScript" exists in the sentence.

// Expected Output:
// true 
// solution
// let sentence = 'I am learning JavaScript today';
// let word = 'JavaScript';
// let index = sentence.indexOf(word);
// console.log(index);
//  if(index !== -1){console.log('ok found')}
//  else{console.log('not found')}
// _________________________________________________________________________
// ques no 20
// Question 2: Word Not Found
// Question:
// You are given a sentence:
// "HTML and CSS are used for web design."
// Check if the word "Python" exists in the sentence.
// Expected Output:
// false
// solution
// let sentence = 'HTML and CSS are used for web design';
// let word = 'Python';
// let index = sentence.indexOf(word);
// if(index === -1){console.log('false')}
// else{console.log('true')}
// _______________________________________________________________________
// ques no 21 
// finding 
// solution
// let sentence = 'HTML and CSS are used for web design';
// let search = prompt('enter word you want to search');

//   let isAvailabe = false;
//  for(var i = 0; i <= sentence.length; i++){
//      if(sentence.slice(i,i+search.length) === search){isAvailabe = true;
//          break;
//     }}
 
//   if(isAvailabe){console.log('found')}
//   else{console.log('not found')}
// _______________________________________________________________________________________
// ques no 22 
//  Convert to Lowercase
// Sentence: "HeLLo WorLD"
// Convert the entire sentence to lowercase.

// Expected Output:
// "hello world"
// solution
// let sentence = 'HeLLo WorLD';
// sentence = sentence.toLowerCase();
// console.log(sentence);
// ________________________________________________________________________________
// ques no 23
// Convert to Uppercase
// Sentence: "frontend developer"
// Convert it to uppercase.

// Expected Output:
// "FRONTEND DEVELOPER"
// solution 
// let sentence = "frontend developer";
// sentence = sentence.toUpperCase();
// console.log(sentence);
// _____________________________________________________________________________________________
// ques no 24 
// Compare Two Strings Without Case Sensitivity
// Word 1: "JavaScript"
// Word 2: "javascript"
// Compare them in a way that ignores case. If they match, print "Match" else "Not Match".

// Expected Output:
// "Match"
// solution
// let enterString1 = prompt('enter one string');
// enterString1 = enterString1.toLowerCase();
// let enterString2 = prompt('enter string 2 ');
// enterString2 = enterString2.toLowerCase();
// if(enterString1 === enterString2){console.log('match')}
// else{console.log('not match')}
// _______________________________________________________________________________________
// ques no 25 
//  Make First Word Uppercase Only
// Sentence: "html and css are cool"
// Make only the first word uppercase and leave the rest lowercase.

// Expected Output:
// "HTML and css are cool"
// solution
// let sentence = "html and css are cool";
// let first = sentence.slice(0,4);
// console.log(first);
// first = first.toUpperCase();
// console.log(first);
// let other = sentence.slice(4);
// console.log(other);
// let updated = first + other;
// console.log(updated);
// ________________________________________________________________________________
// ques no 26 
// Measure Length
// Display the total number of characters in the full name (including spaces).

// let fullName = 'aziz ullah';
// fullName = fullName.length;
// console.log(fullName)
// ______________________________________________________________________________________
// ques no 27 
// Extract First Name
// Extract and display the first name using .slice() or .substring().
let firstName = prompt('enter your first name');
let lastName = prompt('enter your last name');
let fu