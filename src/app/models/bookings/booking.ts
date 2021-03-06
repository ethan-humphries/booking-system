import { Feedback } from './feedback';
import { Customer } from '../accounts/customer';

export interface Booking {
    id?: number;
    staffId: number;
    bookingName?: string;
    customerId?: string;
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
    vegetarian?: boolean;
    glutenFree?: boolean;
    dairyFree?: boolean;
    other?: boolean;
    feedback?: Feedback[];
    customer?: Customer;
}

export enum BookingStatus {
    active = 1,
    complete = 2,
    cancelled = 3,
    noShow = 4
}
