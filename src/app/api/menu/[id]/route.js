import { menu } from '@/app/data/Data';

export async function GET(_, { params }) {
    const food = menu.find(
        (item) => item.id.toString() === params.id
    );
    return Response.json(food);
}