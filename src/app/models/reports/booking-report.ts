import { Booking } from '../bookings/booking';
import { Bookings } from '../bookings/bookings';

export class BookingReport {
    date: Date;
    totalBookings: number;
    bookingsPerWeek: number;
    bookingsPerMonth: number;
    bookingsToDate: number;
    feedback: string;
    staffPerDay: number;
    averageBookings: number;
    averageRating: number;
    totalNoShows: number;
    averageNoShowsPerDay: number;
    averageBookingDuration: number;
}