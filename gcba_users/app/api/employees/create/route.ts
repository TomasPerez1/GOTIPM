
export async function GET(request: Request) {
  try {
    // const { } = await request.json();

    console.log("Se accedio al get");
    return Response.json({
      hola: "zaracatunga"
    });
  } catch (err) {
    console.log("Post err", err);

    return Response.json({
      err,
    });
  }
}