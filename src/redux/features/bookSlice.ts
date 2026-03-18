import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../interface";

// 🧠 State type
type BookState = {
  bookItems: BookingItem[];
};

// 🟢 Initial state
const initialState: BookState = {
  bookItems: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    // ✅ addBooking
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const newBooking = action.payload;

      // 🔥 หา booking เดิม (venue + date ซ้ำ)
      const index = state.bookItems.findIndex(
        (item) =>
          item.venue === newBooking.venue &&
          item.bookDate === newBooking.bookDate
      );

      if (index !== -1) {
        // 👉 ถ้ามี → replace
        state.bookItems[index] = newBooking;
      } else {
        // 👉 ถ้าไม่มี → push
        state.bookItems.push(newBooking);
      }
    },

    // ❌ removeBooking
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const target = action.payload;

      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === target.nameLastname &&
            item.tel === target.tel &&
            item.venue === target.venue &&
            item.bookDate === target.bookDate
          )
      );
    },
  },
});

// export actions
export const { addBooking, removeBooking } = bookSlice.actions;

// export reducer
export default bookSlice.reducer;