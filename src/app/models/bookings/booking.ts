import { Time } from '@angular/common';

export class Booking {
    staffId: number;
    bookingName: string;
    customerName: string;
    date: Date;
    time: Time;
    duration: number;
    numberOfPeople: number;
    table: number;
    status: BookingStatus;
    checkedIn: boolean;
    notes: string;
}

export enum BookingStatus {
    active = 0,
    complete = 1,
    cancelled = 2,
    noShow = 3
}
