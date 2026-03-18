"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../interface";

export default function BookingList() {
  const dispatch = useDispatch();

  const bookings = useSelector((state: any) => {
    return state.book?.bookItems ?? state.bookSlice?.bookItems ?? [];
  });

  if (bookings.length === 0) {
    return <p>การจองว่างบ๋อแบ๋ ไปจองก่อนสิฟะะ!</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {bookings.map((item: BookingItem, index: number) => (
        <div
          key={index}
          className="border p-4 rounded shadow-md"
        >
          <p><b>ชื่อ:</b> {item.nameLastname}</p>
          <p><b>เบอร์โทร:</b> {item.tel}</p>
          <p><b>สถานที่:</b> {item.venue}</p>
          <p><b>วันที่จอง:</b> {item.bookDate}</p>

          <button
            onClick={() => dispatch(removeBooking(item))}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            คลิกที่นี่เพื่อยกเลิกการจอง
          </button>
        </div>
      ))}
    </div>
  );
}