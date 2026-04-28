# Learning Guide: React To-Do Project Setup

Welcome to your new React project! This guide is designed to help you understand what just happened and how to start building your To-Do application.

## 1. What Just Happened?

We used a tool called **Vite** to create your project. Vite is a modern, fast build tool that sets up a React development environment for you in seconds.

When we ran the setup command, it created a folder structure with the following important files and directories:

### Key Files and Folders:
*   **`package.json`**: This is the heart of your project. It lists all the "dependencies" (external code your project needs to run, like React itself) and defines scripts (like the command to start your development server).
*   **`node_modules/`**: This folder contains all the actual code for the dependencies listed in `package.json`. It's huge, and you should never edit files inside it. It's also ignored by Git (so it doesn't get uploaded to GitHub).
*   **`index.html`**: The main HTML file of your application. React will take over a specific `<div>` inside this file and render your entire app within it.
*   **`src/`**: This is where you will spend 99% of your time. It contains your actual application code.
    *   **`src/main.jsx`**: The starting point of your app. It tells React to grab the `App` component and put it into the `index.html` file.
    *   **`src/App.jsx`**: The main component of your application. Right now, it contains some default Vite boilerplate code.
    *   **`src/App.css` and `src/index.css`**: Files for styling your components.

## 2. Running Your Project

To see your app in action, you need to start the "development server".

1.  Open your terminal inside the `React_todo` folder.
2.  Run the following command:
    ```bash
    npm run dev
    ```
3.  The terminal will output a local URL (usually `http://localhost:5173/`). Open that URL in your web browser. You'll see the default Vite + React starting page!

## 3. How to Start Building Your To-Do App

React is all about **Components** and **State**.

### What is a Component?
Think of a component as a reusable piece of the user interface (UI). In a To-Do app, you might have:
*   A `TodoList` component (the main container).
*   A `TodoItem` component (each individual task).
*   A `AddTodo` component (the input field and button to add a new task).

Open `src/App.jsx`. You'll see a JavaScript function that returns something that looks like HTML. That HTML-like syntax is called **JSX**. You can delete the default code inside the `return (...)` statement and start writing your own HTML!

### What is State?
"State" is data that can change over time. When state changes, React automatically updates the screen to reflect the new data.

For your To-Do app, your state will likely be an *array of to-do items*. 

Here is a tiny sneak peek of how you might start your `App.jsx` using state:

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  // 1. Define your state. 'todos' is the list, 'setTodos' is the function to update it.
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false }
  ]);

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      
      {/* 2. Loop through your state and display each item */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      
      {/* You will add an input field and button here later! */}
    </div>
  )
}

export default App
```

## 4. GitHub Connection

Your project has been initialized as a Git repository and connected to `https://github.com/2002Sanjai/To_Do_Project.git`. 

When you make changes to your files and want to save them to GitHub, run these commands in your terminal:

```bash
git add .
git commit -m "Describe what you changed here"
git push -u origin main
```

Happy Coding! You are well on your way to building a great React application.
