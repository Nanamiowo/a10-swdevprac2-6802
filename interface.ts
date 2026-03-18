// interface.ts
export interface VenueJson {
  id: number;
  name: string;
  location: string;
  capacity: number;
}

export interface BookingItem {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
}