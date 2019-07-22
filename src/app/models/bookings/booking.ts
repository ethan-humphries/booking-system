import { Time } from '@angular/common';

export class Booking {
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
    dietryRequirements?: any;
}

export enum BookingStatus {
    active = 0,
    complete = 1,
    cancelled = 2,
    noShow = 3
}
