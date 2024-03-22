export async function GET(req: Request) {
  try {
    let res = await fetch("https://api.asari.pro/site/exportedListingIdList", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "multipart/form-data",
        SiteAuth: "68870:9f3vO7R8BLF4ra05tgO5cD38m41a6bLniXn0C4o5",
      },
    });

    const data = await res.json();
    // console.log(data);

    return Response.json({ list: data, status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json({ list: err, status: 400 });
  }
}

export async function POST(req: Request, id: any) {
  const params = await req.json();
  try {
    let res = await fetch(`https://api.asari.pro/site/listing?id=${params.id}`, {
      method: "GET",
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
