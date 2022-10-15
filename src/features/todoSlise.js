import { createSlice } from "@reduxjs/toolkit";
import faceDatabase from "../faceDatabace";

const todoSlise = createSlice({
  name: "todos",
  initialState: {
    items: faceDatabase,
    test: "im",
  },
  reducers: {
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
    obuv: (state,action) => {
      state.items = state.items.filter((el) => {
        return el.name === "Ботинки"
      });
    },
    inPryce: (state,action) => {
      state.items = state.items.filter((el) => {
        return el.pryce <= action.payload
      })
    }
  },
});

export default todoSlise.reducer;

export const { clear, braslet, colsa ,repite, inPryce , obuv} = todoSlise.actions;
