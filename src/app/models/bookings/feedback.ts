export class Feedback {
    feedbackId: number;
    customerId: number;
    bookingId: number;
    staffId: number;
    feedback: string;
    rating: Rating;
    date: Date;
}

export enum Rating {
    veryPoor = 1,
    poor = 2,
    good = 3,
    veryGood = 4,
    fantastic = 5
}