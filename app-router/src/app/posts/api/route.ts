export async function GET(request: Request) {
  return Response.json({ message: "Hello this is GET API method" });
}

export async function POST(request: Request) {
  return Response.json({ message: "Hello this is POST API method" });
}

export async function PUT(request: Request) {
  return Response.json({ message: "Hello this is PUT API method" });
}

export async function PATCH(request: Request) {
  return Response.json({ message: "Hello this is PATCH API method" });
}

export async function DELETE(request: Request) {
  return Response.json({ message: "Hello this is DELETE API method" });
}