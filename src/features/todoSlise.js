import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import faceDatabase from "../faceDatabace";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const responcse = await fetch(
      "https://63580267c27556d28934a1f9.mockapi.io/stavks"
    );

    const data = await responcse.json();

    return data;
  }
  // 'https://jsonplaceholder.typicode.com/todos'
);

export const addStavk = createAsyncThunk(
  "post/addStavk",
  async function (sov, { rejectWithValue, dispatch }) {


    try {
      const todo = {
        number: sov.number,
        passvord: sov.passvord,
      };
      const response = await fetch(
        "https://63580267c27556d28934a1f9.mockapi.io/stavks",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );
      alert("успешная регистрация")
    } catch (error) {
      alert ("попробуйте снова")
      return rejectWithValue(error.messaje);
    }
  }
);

const todoSlise = createSlice({
  name: "todos",
  initialState: {
    todos: [],

    base: [],
  },
  reducers: {
    plus: (state, action) => {
      state.base = state.base + action.payload;
    },
    push: (state, action) => {
      state.database = state.database + action.payload;
    },

    clear: (state, action) => {
      state.items = [];
    },
    repite: (state, action) => {
      state.items = faceDatabase;
    },

    braslet: (state, action) => {
      state.items = state.items.filter((el) => {
        return el.name === "Браслет";
      });
    },
    colsa: (state, action) => {
      state.items = state.items.filter((el) => {
        return el.name === "Кольцо";
      });
    },
    obuv: (state, action) => {
      state.items = state.items.filter((el) => {
        return el.name === "Ботинки";
      });
    },
    inPryce: (state, action) => {
      state.items = state.items.filter((el) => {
        return el.pryce <= action.payload;
      });
    },
  },

  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      // console.log(action.payload[1])
    },
    [fetchTodos.rejected]: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todoSlise.reducer;

export const { clear, braslet, colsa, repite, inPryce, obuv, plus, push } =
  todoSlise.actions;
