import { data } from "../data";

export function GET(request: Request, { params }: { params: { id: string } }) {
  const comment = data.find((p) => p.id === parseInt(params.id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json();
  const index = data.findIndex((p) => p.id === parseInt(params.id));
  data[index].comment = text;
  return Response.json(data[index]);
}
