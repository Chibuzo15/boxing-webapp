import { NextResponse } from "next/server";

export async function GET() {
  // Simulate fetching data from an external API (replace with your actual logic)
  const trending = [
    {
      title: "Fury-Usyk Fight Week Diary: Day Five",
      time: "30m",
    },
    {
      title: "Checkmate: Usyk Several Moves Ahead Of The Gypsy King",
      time: "30m",
    },
    {
      title: "Exemplary Usyk An ‘Icon’ For Those Suffering In Ukraine",
      time: "30m",
    },
  ];

  return NextResponse.json(trending);
}
