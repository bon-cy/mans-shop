import { configureStore } from "@reduxjs/toolkit";
import todos from "../features/todoSlise";

export const store = configureStore({
    reducer:todos
})