export async function POST(req: Request, id: any) {
  console.log(id);
  try {
    let res = await fetch(`https://api.asari.pro/site/listing?id=&lt;${id}`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "multipart/form-data",
        SiteAuth: "68870:9f3vO7R8BLF4ra05tgO5cD38m41a6bLniXn0C4o5",
      },
    });

    const data = await res.json();
    console.log(data);

    return Response.json({ list: data });
  } catch (err) {
    console.log(err);
    return Response.json({ list: err });
  }
}
