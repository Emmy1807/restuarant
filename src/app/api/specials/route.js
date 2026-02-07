import { specials } from "@/app/data/Data";

export async function GET() {
    return Response.json(specials);
}
