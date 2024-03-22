import { cookies } from "next/headers";

export async function POST(req: Request) {
  const login = process.env.LOGIN;
  const pass = process.env.PASS;

  const params = await req.json();

  if (login === params.login && pass === params.pass) {
    cookies().set("Admin", "12312345678admin");
    return Response.json({ message: "Correct", status: 200 });
  } else {
    return Response.json({ message: "Incorrect", status: 400 });
  }
}
