(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{502:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"prototypal-inheritance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototypal-inheritance"}},[t._v("#")]),t._v(" Prototypal Inheritance")]),t._v(" "),e("h3",{attrs:{id:"everything-is-an-object-in-javascript-or-is-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#everything-is-an-object-in-javascript-or-is-it"}},[t._v("#")]),t._v(" Everything is an object in JavaScript... or is it?")]),t._v(" "),e("p",[t._v('You might have heard people say that "In JavaScript, Everything is an Object".')]),t._v(" "),e("p",[t._v("If you are not familiar with what an object looks like, here is an example:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/588/1*CohNoqCxqBqAFIEEGN7hjw.png",alt:"Image for post"}})]),t._v(" "),e("p",[t._v("While this is not entirely true in every case, people still consider the above statement to be true because JavaScript is a prototype-based Object Oriented Programming Language, instead of class-based.")]),t._v(" "),e("p",[t._v("In JavaScript, there are two main types of values:")]),t._v(" "),e("ul",[e("li",[t._v("Primitives --- Strings, Numbers, Booleans, Undefined, and Null.")]),t._v(" "),e("li",[t._v("Objects --- Arrays, Functions, Dates")])]),t._v(" "),e("p",[t._v("So, while everything in JavaScript is not an object, the not-object things get wrapped into an object while compilation, allowing JavaScript to do really complicated operations. Even if you think that a value in your code is not an object, chances are that JavaScript has wrapped it inside one.")]),t._v(" "),e("p",[t._v("For example, if we create an empty function named "),e("code",[t._v("hero")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("And like I mentioned before, functions are also classed as objects in JavaScript. So if we add a property "),e("code",[t._v("type")]),t._v(" to this function and print it out, you will see that "),e("code",[t._v("hero")]),t._v(" function is now also an object.")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'superman'")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Output")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Function"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'superman'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("This is one of many things that makes JavaScript so awesome! 🙌")]),t._v(" "),e("p",[t._v("To understand what Prototypal Inheritance is, we first need to understand what an Object Oriented Language is.")]),t._v(" "),e("h2",{attrs:{id:"flashback-object-oriented-programming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flashback-object-oriented-programming"}},[t._v("#")]),t._v(" Flashback --- Object Oriented Programming")]),t._v(" "),e("p",[t._v("In an object oriented programming, objects use methods and properties to interact with one another and create complex applications. This also allows a developer to easily store data in a structured and clean way.")]),t._v(" "),e("p",[t._v('In the example object shown above, we are only storing some data. If I want to create another object for "Batman", I will have to create a whole new one.')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/604/1*S-xFcAF5D-swARXxTVTdlw.png",alt:"Image for post"}})]),t._v(" "),e("p",[t._v("In a real world application, this method can get really tiring and repetitive.")]),t._v(" "),e("p",[t._v("We can see that both these objects are storing the same kind of data: "),e("code",[t._v("name")]),t._v(", "),e("code",[t._v("alias")]),t._v(", and "),e("code",[t._v("planet")]),t._v(". So what if we create a general object that we can then use to create separate instances of that object?")]),t._v(" "),e("p",[t._v("If you are familiar with other programming languages, you would think that I am talking about creating a class. But JavaScript is a Prototype-based language, not Class-based. ( However classes can be used we will keep it on prototypes for now )")]),t._v(" "),e("p",[t._v("In JavaScript, this general object is what is commonly known as a Constructor or a Prototype.")]),t._v(" "),e("p",[t._v("In JavaScript, there is no real difference between a regular function and a constructor function. But in order to help developers differentiate between the two, constructor functions are capitalized.")]),t._v(" "),e("p",[t._v("By creating a prototype, developers can easily create multiple unique instances of the prototype. This is a create way to keep our code clean and concise.")]),t._v(" "),e("p",[t._v("Based on our two objects above, I can now create a Prototype. Lets begin by creating a new function named "),e("code",[t._v("Hero")]),t._v(". Note that here we need to capitalize the first letter of the function name.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/822/1*sfoohfNt-C2JETbm7siUjQ.png",alt:"Image for post"}})]),t._v(" "),e("p",[t._v("Then, I can use the prototype to create the "),e("code",[t._v("superman")]),t._v(" and "),e("code",[t._v("batman")]),t._v(" objects using the "),e("code",[t._v("new")]),t._v(' keyword. This is actually why prototypes are also known as constructors. We are using the prototype function to "construct" a new object.')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/1242/1*rIids0agAyjsFlSwKnz8wg.png",alt:"Image for post"}})]),t._v(" "),e("h2",{attrs:{id:"inheritance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inheritance"}},[t._v("#")]),t._v(" Inheritance")]),t._v(" "),e("p",[t._v("Inheritance is the process by which one object can be based on another. This lets the objects to share each other's properties.")]),t._v(" "),e("p",[t._v("I have created the "),e("code",[t._v("Hero")]),t._v(" prototype and used it to create a new object named "),e("code",[t._v("superman")]),t._v(". But we are not doing anything with this object. So let's take care of that by creating another function called "),e("code",[t._v("dialogue")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialogue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I am '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("But if we run our code now, nothing is going to happen because this function doesn't know what the name really is. For that, we need to")]),t._v(" "),e("p",[t._v("I want this new function to have the same properties as that of the "),e("code",[t._v("Hero")]),t._v(". Instead of writing them down inside this function, we can simply tell JavaScript to inherit them from the "),e("code",[t._v("Hero")]),t._v(" prototype.")]),t._v(" "),e("p",[t._v("This is possible with the help of the "),e("code",[t._v("prototype")]),t._v(" property that is available within any object in JavaScript.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/854/1*fd87Pc_VHVAZiDrN646_NA.png",alt:"Image for post"}})]),t._v(" "),e("p",[t._v("By placing "),e("code",[t._v("dialogue")]),t._v(" on "),e("code",[t._v("Hero.prototype")]),t._v(", we have made it available to all instances of "),e("code",[t._v("Hero")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"differential-inheritance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differential-inheritance"}},[t._v("#")]),t._v(" Differential Inheritance")]),t._v(" "),e("p",[t._v('JavaScript also comes with another inheritance model called "differential inheritance". In this model, the methods are not copied from the parent to child. But instead there is a link between the children and their parent object.')]),t._v(" "),e("p",[t._v("Here, "),e("code",[t._v("superman")]),t._v(" doesn't actually have its own method called "),e("code",[t._v("dialogue()")]),t._v(". But then how does "),e("code",[t._v("superman.dialogue()")]),t._v(" work?")]),t._v(" "),e("p",[t._v("When the JavaScript engine comes across "),e("code",[t._v("superman.dialogue()")]),t._v(" in the code, it looks for the property called "),e("code",[t._v("dialogue")]),t._v(" inside the "),e("code",[t._v("superman")]),t._v(" object. When it doesn't find one, it will look up the prototype chain to "),e("code",[t._v("superman")]),t._v("'s parent "),e("code",[t._v("Hero.prototype")]),t._v(". There it will find "),e("code",[t._v("Hero.prototype.dialogue")]),t._v(" and calls it with a "),e("code",[t._v("this")]),t._v(" that is bound to "),e("code",[t._v("superman")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"object-create"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-create"}},[t._v("#")]),t._v(" Object.create()")]),t._v(" "),e("p",[t._v("We can make this even more exclusive by creating a new class for "),e("code",[t._v("Superman")]),t._v(" that will inherit the properties of the "),e("code",[t._v("Hero")]),t._v(" prototype. We can do this by assigning the prototype of "),e("code",[t._v("Superman")]),t._v(" to the "),e("code",[t._v("Hero")]),t._v(" prototype like this:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Superman")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Superman")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("But what this does is that it just makes both "),e("code",[t._v("Superman")]),t._v(" and "),e("code",[t._v("Hero")]),t._v(" equal. What we really need is a new object that is based on the "),e("code",[t._v("Hero")]),t._v(" prototype. Since ES5, JavaScript comes with a built-in function called "),e("code",[t._v("Object.create()")]),t._v(". Let's use it here as shown below:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Superman")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("This will create a new empty object that is based on the "),e("code",[t._v("Hero")]),t._v(" prototype and assign it to the "),e("code",[t._v("Superman")]),t._v(" prototype. So all the properties that we have in the "),e("code",[t._v("Hero")]),t._v(" prototype can now be accessed by the "),e("code",[t._v("Superman")]),t._v(" prototype. So instead of calling "),e("code",[t._v("new Hero")]),t._v(", we can call "),e("code",[t._v("new Superman")]),t._v(" and everything will still work as it should.")]),t._v(" "),e("p",[t._v("But if you take a closer look at the output, you will notice that there is an "),e("code",[t._v("undefined")]),t._v(" inside it. That is because currently the "),e("code",[t._v("Hero")]),t._v(" is a constructor only for itself. We have to "),e("code",[t._v("call")]),t._v(" the properties of "),e("code",[t._v("Hero")]),t._v(" inside the "),e("code",[t._v("Superman")]),t._v(" prototype.")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Superman")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hero")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Superman'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Clark Kent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Krypton'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Let's create another constructor called "),e("code",[t._v("MarvelMovies")]),t._v(" as shown below:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MarvelMovies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("movieName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" releaseYear")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movieName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" movieName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("releaseYear "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" releaseYear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("When a function is used as a constructor, "),e("code",[t._v("this")]),t._v(" refers to the new object that we are creating. So in this constructor, I have taken "),e("code",[t._v("movieName")]),t._v(" and "),e("code",[t._v("releaseYear")]),t._v(" as arguments and assigned those values to the "),e("code",[t._v("movieName")]),t._v(" and "),e("code",[t._v("releaseYear")]),t._v(" properties of our new "),e("code",[t._v("MarvelMovies")]),t._v(" instance named "),e("code",[t._v("avengers")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" avengers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MarvelMovies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avengers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2012")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("I am then going to create a new method called "),e("code",[t._v("output")]),t._v(" for this prototype as shown below:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MarvelMovies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("output")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Movie: "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movieName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" Released in "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("releaseYear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("avengers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("output")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h2",{attrs:{id:"future-inheritance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#future-inheritance"}},[t._v("#")]),t._v(" Future Inheritance")]),t._v(" "),e("p",[t._v("A really great aspect of inheritance is that JavaScript lets you modify or expand on the features of a class even after you have defined it.")]),t._v(" "),e("p",[t._v("JavaScript will look up the prototype when trying to access properties on an object. So, you can alter classes at runtime!")]),t._v(" "),e("p",[t._v("To illustrate this, lets create an array as shown below:")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" numbers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("shuffle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numbers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("shuffle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("Here, the "),e("code",[t._v("numbers")]),t._v(" array existed before the "),e("code",[t._v("Array.prototype.shuffle")]),t._v(" did. But in JavaScript, the property lookups go up the prototype chain. This is why the array still gets access to the new method "),e("code",[t._v("shuffle")]),t._v(", since it exists on the "),e("code",[t._v("Array.prototype")]),t._v(" when we are actually trying to use it.")]),t._v(" "),e("p",[t._v("In simple terms, we created an array, then went back and gave all Arrays access to a new method.")]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("p",[t._v("There are lot of resources out there that explains how prototypal inheritance works in JavaScript. The official documentation of JavaScript states that:")]),t._v(" "),e("blockquote",[e("p",[t._v("When it comes to inheritance, JavaScript only has one construct: "),e("code",[t._v("objects")]),t._v(". Each "),e("code",[t._v("object")]),t._v(" has an internal link to another "),e("code",[t._v("object")]),t._v(" called its "),e("code",[t._v("prototype")]),t._v(". That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. "),e("code",[t._v("null")]),t._v(", by definition, has no prototype, and acts as the final link in this prototype chain.")])]),t._v(" "),e("p",[t._v("This definition can get confusing and hard to grasp. This is why some like to shift to the class-based inheritance instead of prototypal inheritance.")]),t._v(" "),e("p",[t._v("There are a lot of other interesting things to discuss around prototypal inheritance, which keep expanding with each newer syntax that comes with ES5, ES6, ES7, and others have to offer.")]),t._v(" "),e("p",[t._v("For example, "),e("code",[t._v("Object.assign")]),t._v(" is a great way of improving factories while keeping your code to a minimum. "),e("code",[t._v("Object.create")]),t._v(" also has some interesting use cases.")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),e("small",[t._v("S, Rajat. Understanding JavaScript's Prototypal Inheritance. 28 Mar. 2019, blog.bitsrc.io/understanding-javascripts-prototypal-inheritance-354292253bcb.")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"daily-journal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#daily-journal"}},[t._v("#")]),t._v(" Daily Journal")]),t._v(" "),e("h3",{attrs:{id:"answer-the-following-questions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#answer-the-following-questions"}},[t._v("#")]),t._v(" Answer the following questions")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("What is the difference between a "),e("code",[t._v("Constructor")]),t._v(" in comparison to a regular "),e("code",[t._v("Function")]),t._v("?")])]),t._v(" "),e("li",[e("p",[t._v("What is a prototype?")])]),t._v(" "),e("li",[e("p",[t._v("What is "),e("code",[t._v("inheritance")]),t._v(" and how can it be used?")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);