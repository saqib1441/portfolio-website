import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    { message: "The server is running" },
    { status: 200 }
  );
};
