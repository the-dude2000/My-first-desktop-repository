/* Pure component only works with class component not function comp
import React, { Component } from "react";

import "./Apps.css";

class Apps extends Component {
  state = {
    val: 1,
  };
  render() {
    return (
      <div className="Apps">
        <header className="Apps-header"></header>
      </div>
    );
  }
}


React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings. This improves performance because it memoizes the result and skips rendering to reuse the last rendered result.

There are two ways you can wrap your component with React.memo(). It is either you wrap the actual component directly without having to create a new variable to store the memoized component:

const myComponent = React.memo((props) => {
    
});

export default myComponent;

Another option is to create a new variable to store the memoized component and then export the new variable:

const myComponent = (props) => {
    
};

export const MemoizedComponent = React.memo(myComponent);

In the example above, myComponent outputs the same content as MemoizedComponent, but the difference between both is that MemoizedComponent render is memoized. This means that this component will only re-render when the props change.
Note: A memoized component will only re-render when there is a change in props value or when the state and context of the component change.


// render using props up above


const thisComponent = React.memo((props) => {

});

export default thisComponent;

<!-- App.js -->
import React, { useState } from 'react';
import Todo from './Todo';

const App = () => {
    console.log('App component rendered');
    const [todo, setTodo] = useState([
        { id: 1, title: 'Read Book' },
        { id: 2, title: 'Fix Bug' },
    ]);
    const [text, setText] = useState('');

    const addTodo = () => {
        let newTodo = { id: 3, title: text };
        setTodo([...todo, newTodo]);
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="button" onClick={addTodo}>
                Add todo
            </button>
            <Todo list={todo} />
        </div>
    );
};

export default App;

When you need to remember the values of a function or an object, you can use hooks like useMemo() and useCallback(). Also, avoid using React Memo if the component is light and renders with multiple props.

Finally, never use React Memo to wrap a class-based component; instead, extend PureComponent or implement the shouldComponentUpdate() method.

Portals

React Portals are a way to child components into a DOM node that exists outside the hierarchy of the parent components. Even though a portals can be mounted anywhere in the DOM tree, they behave like normal React children in every other way. Contexts will also work with portals as with any other React components. Typical use cases for portals includes modals, popup-menus, toasts and similar where you need to mount the components at a higher level in the DOM three.

const Modal = ({ title, content }) => {
  const containerDiv = document.getElementById('containerDiv');

  return ReactDOM.createPortal(
    <>
      <h1>{title}</h1>
    <>, 
    containerDiv
  );
}

const App = () => {
  const [loggedIn] = useUser();

  return (
    <>
      <Article />
      {!loggedIn && <Modal title="login">...</Modal>}
    </>
  );
}
*/
