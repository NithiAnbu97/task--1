//  To Read

  1. What is-the-difference-between-statically-typed-and-dynamically-typed-languages

  statically-typed :
            *)  type of the variable is known at compiling time
            *)  all kind of checking can be done by compiler  & hence trival bugs can be 
                fixed in early stage.

 dynamically-typed :
           *)   type is  associated with run time values
           *)    programmer can write little quicker because you don't specify type 
           everytime.


  2. scripting-language-vs-programming-language

  scripting language is the subset of programming language

  scripting-language :
                    *)  target software systems, it's gone to automate update on software systems


  programming-language :
                    *)   tareget computing systems, which can be real or virtual machine

 3.   paradigms :
                 It is a prototype-based, multi-paradigm scripting language that is dynamic, 
 and supports object-oriented, imperative, and functional programming styles. 
 JavaScript runs on the client side of the web, 
 which can be used to design / program how the web pages behave on the occurrence of an event.
       

 4.  What is the difference between http1 1 and http2 ?

 HTTP2 is much faster and more reliable than HTTP1.
 HTTP1 loads a single request for every TCP connection, while HTTP2 avoids network delay by using multiplexing. 
  HTTP is a network delay sensitive protocol in the sense that if there is less network delay, then the page loads faster.

     
  5.  What are objects and its internal representation in JavaScript?

     Objects are important data types in javascript. Objects are different than primitive datatypes (i.e. number, string, boolean, etc.). 
     Primitive data types contain one value but Objects can hold many values in form of Key: value pair. 
     These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

        Every object has some property associated with some value. These values can be accessed using these properties associated with them.
  
  var myCar = new Object();
  
  myCar.make = 'Suzuki';
  
  myCar.model = 'Altros';
  
  myCar.year = 1978;
  
  myCar.wheels = 2;
  
  After creating myCar object, the value inside the object can be accessed using keys.
  
  i.e.
  
  myCar.year
  
  Output: 1978
        
