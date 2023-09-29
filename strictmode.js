/*
What is React Strict Mode?

React Strict Mode is a developer tool highlighting potential bugs or issues in a React application's codebase. It provides warnings to developers as feedback for errors that occur in an application, with no effect on the result because it does not render any visible UI.

With React v18.0, new features were added to the framework, and some existing features were significantly improved.

React Strict Mode runs some functions in the development environment to ensure that they return values identical to the desired arguments and have no unintended side effects. These functions are as follows:

    Functional Component
    Initializer Function
    Updater Function
    React Strict Mode versus “use strict”
    This section explains the relationship between Strict Mode and the JavaScript "use strict" expression. You can specify that a code block should be run in strict mode by appending "use strict" to the beginning of a script or function.

Strict Mode, on the other hand, detects errors in coding patterns and flags previously accepted "bad syntax" as errors by eliminating silent errors and throwing errors when they occur. React Strict mode works similarly to JavaScript's "use strict" expression in that it ensures a more strict and type-safe version of JavaScript.

The relationship between React Strict Mode and the "use strict" expression is described in the table below:
Comparison between React Strict Mode and Use Strict
React Strict Mode

Undeclared variables will return an error in React Strict mode. It checks for the following:

    Components with unsafe lifecycles.
    Usage of legacy or deprecated APIs or methods like the string ref API and Context API, and findDOMNode.
    Unexpected side effects.

You can reference the Strict Mode by using <React.StrictMode>, or import { StrictMode } from 'react' in your code. Then, the component can be called as StrictMode.

Wrap the suspected code in the Strict Mode helper component as shown in the code block below:

import React from 'react';
import ReactDOM from 'react-dom/client';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
const SuspiciousCode=()=>{
  return (
    <div>Contains suspicious code blocks</div>
  )
}
 
root.render(
   <React.StrictMode>
       <SuspiciousCode />
   </React.StrictMode>
)

Use Strict

The expression “use strict” flags out the following as errors:

    Assigning values to undeclared variables.
    Use of keywords for variable name, e.g. public.
    Writing data to constant variables.
    Accessing a variable before it is declared etc. 

Both statements in the code example below will return errors because arguments is a reserved words and variable x is not defined.

Also, “use strict” must be specified at the top of the file for it to take effect.

"use strict";
 
let arguments = "an argument"; 
 
x = 500;

Strict Mode plays a significant role in the incremental adoption of Concurrent rendering, a new implementation detail that, in simple terms, allows rendering UI to be interruptible. While in development, Strict Mode can be used to help expose concurrency-related bugs.

The new React Strict Mode behaviours are as follows:

    React Strict Mode can now be used to detect bugs that occur as code runs concurrently (two or more tasks being carried out simultaneously).
    Strict Mode only runs in development, which does not impede the production build.
    It logs extra warnings or errors and invokes functions twice to ensure that the expected results always occur.
    With React 18, Strict Mode can now handle mounting and unmounting components and, in future, preserve and restore their state on subsequent mounts.

Benefits of React Strict Mode

React Strict Mode comes with a couple of outstanding benefits:

    Preventing Mutations of Values: Strict Mode aids in the prevention of scenarios in applications where values are mutated by unpure functions, resulting in different results after each render. The developer can easily detect if the application returns the expected results thanks to its double invocation feature.
    Ease of use: React Strict mode makes it easier to work with unfamiliar codebases, i.e. code that you did not write.
    Bug detection: It makes it easier to detect programming bugs.
    Facilitating Clean Code: Strict Mode helps you become a better React developer. It assists the developer in writing cleaner code by instilling the habit of writing code that follows React's best practices.

Features of React Strict Mode

In this section, you will learn about the current features of StrictMode, which include:

    Identifying components with unsafe lifecycles in React.
    Warning about Legacy String Ref API usage.
    Warning about deprecated findDOMNode usage.
    Detecting unexpected side effects.
    Detecting legacy context API.
    Ensuring a reusable state.

Identifying components with unsafe lifecycles in React

Legacy components such as componentWillMount, componentWillReceiveProps, and componentWillUpdate have been discovered to cause unhealthy code practices in React. When misused in asynchronous React applications, they produce undesirable results. As a result, React developers decided to prefix these lifecycles with UNSAFE_ in future releases.

As an improvement, React Strict Mode will now detect and warn the developer whenever these lifecycles are used. Furthermore, React Strict Mode inspects third-party packages in the development environment and can notify the user if these packages use deprecated dependencies.
Warning About Legacy String Ref API Usage

Due to difficulties in passing refs to child components and issues with referencing the names of created Refs, the use of the String Ref in React, which was previously acceptable in previous versions, now has a warning in Strict Mode. Strict Mode warns developers, instructing them to use Callback refs or React.createRef as best practices.
Warning about deprecated findDOMNode usage
FindDOMNode was a React feature designed to search the DOM node tree for a specific class interface. A refactoring issue caused by the FindDOMNode approach was that the parent component needed to be aware of their child's implementation details to return the appropriate child. Another issue was that FindDOMNode did not reflect changes in the state of node elements.
Detecting Unexpected Side Effects

Due to the Strict Mode practice of double invoking function routines, functions can scrutinise their results to ensure they are pure and produce the desired results whenever the functions run. As a result, if a side effect occurs erroneously during the function render process, it can easily be detected and traced in Development Mode due to visible inconsistencies in the program’s output.
Detecting Legacy Context API

StrictMode now highlights the use of the old Context API, prompting the user to upgrade to a higher version, as the Legacy Context API will be discontinued in future React releases.
Ensuring a reusable state

In future versions, the React Strict Mode aims to prevent state loss caused by component mounts and dismounts. This feature improves performance by retaining and restoring application states when dismounted components are mounted back into the component tree.
Conclusion
In this article, you learned about the React Strict Mode, its similarities to the JavaScript “use strict” expression, and the enormous benefits and features of the React Strict Mode.

<React.StrictMode>
   <App />
   </React.StrictMode> /////////////// can wrap strictmode in a portion of code only make changes while in development

*/