import { menu } from "@/app/data/Data";

export async function GET() {
    return Response.json(menu);
}