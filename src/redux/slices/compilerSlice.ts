import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  CurrentLanguage: "html" | "css" | "javascript";
}

const InitialState: compilerStateType = {
  fullCode: {
    html: `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ToDo App</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="container">
            <h1>ToDo List</h1>
            <div class="input-group">
                <input type="text" id="todo-input" placeholder="Add a new task...">
                <button id="add-btn">Add</button>
            </div>
            <ul id="todo-list"></ul>
        </div>
        <script src="script.js"></script>
    </body>
    </html>
    `,
    css: `/* styles.css */
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    
    .container {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 300px;
    }
    
    h1 {
        text-align: center;
    }
    
    .input-group {
        display: flex;
        margin-bottom: 20px;
    }
    
    #todo-input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    
    #add-btn {
        padding: 10px;
        border: none;
        background-color: #28a745;
        color: #fff;
        border-radius: 4px;
        margin-left: 10px;
        cursor: pointer;
    }
    
    #add-btn:hover {
        background-color: #218838;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    li {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    li.completed {
        text-decoration: line-through;
        color: #888;
    }
    
    li button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    
    li button:hover {
        color: red;
    }
    `,
    javascript: `// script.js
    document.addEventListener('DOMContentLoaded', () => {
        const todoInput = document.getElementById('todo-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');
    
        addBtn.addEventListener('click', addTodo);
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    
        function addTodo() {
            const todoText = todoInput.value.trim();
            if (todoText === '') {
                alert('Please enter a task');
                return;
            }
    
            const li = document.createElement('li');
            li.textContent = todoText;
    
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });
    
            li.appendChild(deleteBtn);
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
    
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });
    `,
  },
  CurrentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState: InitialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerStateType["CurrentLanguage"]>
    ) => {
      console.log(action.payload);
      state.CurrentLanguage = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<{ language: string; code: string }>
    ) => {
      const { language, code } = action.payload;
      (state.fullCode as { [key: string]: string })[language] = code;
    },
    updateCode: (
      state,
      action: PayloadAction<compilerStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateFullCode, updateCode } =
  compilerSlice.actions;
