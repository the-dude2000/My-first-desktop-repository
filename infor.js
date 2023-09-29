/*
When we initialize an array in a programming language, the language allocates space in memory for array and then points that starting variable to that address in memory. Then it assigns a fixed amount of memory for each element.

React.createFactory(type) Providers a cleaner way to make code like lists,etc. DOM.section,li you know

Return a function that produces React elements of a given type. Like React.createElement(), the type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.

This helper is considered legacy, and we encourage you to either use JSX or use React.createElement() directly instead.

You will not typically invoke React.createFactory() directly if you are using JSX.

Stop using create react app unless necessary
Alternatives are: 
Vite much faster much more production ready add in different plug ins build 
Can also build projects that arent react based as well /// built in typescript support
big con no built in server side rendering purely for client side application probably will not use on a super large application

Astro and Gatsby
SSG 
Static-site generators
Static-site generators enable developers to create many pages all at once using templates with content plugged into them. For example, you may have a blog page for your application, each one has a header, title, the author's name and image, and the content itself all using the same layout from post to post.
a site that hAs a set number of pages that dont really have any dynamic content on them
can be used to create dynamic content not really what they excel at /////
Dont worry about server rendering 
always going to be the same //// 
markdown 

Markdown is a lightweight markup language that many technical professionals use to create and edit technical documents. With Markdown, you write text in a plain text editor (such as vi or Emacs), inserting special characters to create headers, boldface, bullets, and so on.
# other things with astro 

Next.js like react but supercharged
you can create an API directly inside of your next JS application also has really good support for server side rendering full static site generation
good for large site built in stuff router
Remix framework Remix blitz.js redwood other alternatives for framework stuff
Prisma Postgres Mongo /////
Ruby on rails is a very prescriptive web framework that says okay youre going to use this database this //// database object you know orm prescribed exactly to u this kind of stuff and its a very strict protcol
on how u should do things
Problem with most Javascript frameworks and libraries is its very open ended on how u do everything but with these different frameworks were going to tell ya what 2 do and do it this way easier stuff /////

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.

he useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
Syntax

The useReducer Hook accepts two arguments.

useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

The useReducer Hook returns the current stateand a dispatchmethod.

Here is an example of useReducer in a counter app:

import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);











































































































*/