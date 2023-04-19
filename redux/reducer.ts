import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Client {
  toggleForm: boolean;
  formId: any;
}

interface InitialState {
  client: Client;
}

const initialState: InitialState = {
  client: { toggleForm: false, formId: undefined },
};

export const ReducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateAction: (state, action) => {
      state.client.formId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
