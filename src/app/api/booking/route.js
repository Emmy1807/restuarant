import { bookings } from "@/app/data/Data";

export async function GET() {
    return Response.json(bookings);
}

export async function POST(request) {
    const booking = await request.json();
    delete booking.validate;
    const newBooking = {
        id: bookings.length + 1,
        details: booking
    };
    bookings.push(newBooking);
    return new Response(JSON.stringify(newBooking), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}