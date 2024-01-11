import { data } from "./data"
export async function GET() {
    return  Response.json(data);
}
//post request

export async function POST(request:Request) {
    const com = await request.json();
    const newComment = {
        id:data.length + 1,
        comment: com.message
    }
    data.push(newComment);
    return new Response("posted")
}