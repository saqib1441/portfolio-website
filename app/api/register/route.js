import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        stack: error.stack,
      },
      {
        status: 500,
      }
    );
  }
};
