//Does the following code produce an error? Why or why not?
//What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

//No error as the iterator in the for statement is optional
//it outputs 1 2 3 4 5