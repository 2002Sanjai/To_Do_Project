# Learning Guide: React State, Props, and Events

Welcome back! Now that your To-Do application is fully dynamic (you can add, edit, and delete tasks), it's time to learn *how* it actually works under the hood.

This guide will break down the three most important concepts in React using the exact code we just wrote.

---

## 1. State (`useState`)

**What is it?** 
State is React's memory. It's how a component remembers information that changes over time. When "State" changes, React automatically re-draws (re-renders) the screen to show the new data.

**How we used it in your app:**
Open `src/App.jsx`. You will see this line at the top:
```jsx
const [todos, setTodos] = useState([ ... ]);
```
*   `todos` is the variable holding your current list of tasks.
*   `setTodos` is the special function you MUST use to change the list. 
*   **Rule:** You can never do `todos = []`. You must always use `setTodos([])`. This tells React, "Hey, the data changed, please update the screen!"

We also used state in `src/components/TodoInput.jsx` to remember what you are typing into the text box:
```jsx
const [inputText, setInputText] = useState('');
```

---

## 2. Props (Properties)

**What is it?**
Props are how components talk to each other. Specifically, it's how a "Parent" component passes data and functions down to a "Child" component. Think of them like arguments passed to a standard JavaScript function.

**How we used it in your app:**
In `src/App.jsx`, `App` is the parent. It holds the `todos` state. But `TodoList.jsx` is the child that actually needs to draw the tasks on the screen. 

Look at how `App.jsx` passes data down:
```jsx
// Inside App.jsx
<TodoList 
  todos={filteredTodos} 
  deleteTodo={deleteTodo} 
/>
```

Now, look at how `TodoList.jsx` receives that data:
```jsx
// Inside TodoList.jsx
function TodoList({ todos, deleteTodo }) {
  // Now TodoList can map over 'todos' and call 'deleteTodo'
}
```

---

## 3. Events (`onClick`, `onChange`, `onSubmit`)

**What is it?**
Events are how you capture user interactions (like clicking a button or typing in a box). In regular HTML, you might use `onclick`. In React, it is camelCased: `onClick`.

**How we used it in your app:**

**A. Form Submission (`onSubmit`)**
In `TodoInput.jsx`, we want to add a task when the user clicks "Add new task" OR presses the 'Enter' key. We do this by wrapping the input in a `<form>` and listening for the submit event:
```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // Stops the browser from refreshing the page!
  addTodo(inputText);
};

<form onSubmit={handleSubmit}> ... </form>
```

**B. Typing (`onChange`)**
To make the input box work in React, we have to manually update our local state every time the user types a letter.
```jsx
<input 
  value={inputText} // The box always shows whatever is in state
  onChange={(e) => setInputText(e.target.value)} // When they type, update the state!
/>
```
*(Note: `e.target.value` is JavaScript's way of grabbing the text inside an input box).*

**C. Button Clicks (`onClick`)**
In `TodoList.jsx`, when you click the trash can icon, we want to delete that specific task. Because we need to tell the `deleteTodo` function *which* ID to delete, we wrap it in an anonymous arrow function:
```jsx
<FaTrashAlt onClick={() => deleteTodo(todo.id)} />
```

---

## Summary of the Flow
1. You type in `TodoInput`. `onChange` updates the local `inputText` state.
2. You press Enter. `onSubmit` triggers `addTodo(inputText)`.
3. `addTodo` lives in `App.jsx`. It takes your text, creates a new task object, and calls `setTodos()`.
4. React sees `setTodos()` was called. It re-renders `App.jsx`.
5. `App.jsx` passes the new `todos` list down to `TodoList.jsx` as a prop.
6. `TodoList.jsx` maps over the new list and draws it on your screen!
