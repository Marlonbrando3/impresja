export async function GET(req: Request) {
  try {
    let res = await fetch(
      "https://api.asariweb.pl/apiSite/listing?userId=<User_ID>&loginToken=<TOKEN>&id=<Listing_ID>",
      {
        method: "POST",
        // headers: { "Content-Type": "multipart/form-data" },
        // SiteAuth: "1234:1234",
      },
    );

    const data = await res.json();
    console.log(data);

    return Response.json({ properties: data });

    // console.log(await res.json());
  } catch (err) {
    console.log(err);
    return Response.json({ properties: err });
  }
}
