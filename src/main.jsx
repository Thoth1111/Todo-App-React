import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from '@/components/TodoApp';
import Navbar from "./components/Navbar";
import '@/styles/App.css';


const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
<React.StrictMode>
    <Navbar />
    <TodoApp />
</React.StrictMode>
);
