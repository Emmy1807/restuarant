import { chefs } from "@/app/data/Data";

export async function GET() {
    return Response.json(chefs)
}