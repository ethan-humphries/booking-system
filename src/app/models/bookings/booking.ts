import { Time } from '@angular/common';

export class Booking {
    bookingId?: number;
    staffId: number;
    bookingName: string;
    customerName?: string;
    date?: any;
    time?: any;
    duration: any;
    numberOfPeople: number;
    table?: any;
    status?: BookingStatus;
    checkedIn?: boolean;
    notes?: string;
    highchairRequired?: boolean;
    wheelchair?: boolean;
    dietOther?: any;
    vegetarian?: boolean;
    glutenFree?: boolean;
    dairyFree?: boolean;
    other?: boolean;
}

export enum BookingStatus {
    active = 1,
    complete = 2,
    cancelled = 3,
    noShow = 4
}
