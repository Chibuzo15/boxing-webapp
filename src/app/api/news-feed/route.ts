import { NextResponse } from "next/server";

export async function GET() {
  // Simulate fetching data from an external API (replace with your actual logic)
  const newsFeed = [
    {
      title: "Fury-Usyk Fight Week Diary: Day Five",
      time: "30m",
    },
    {
      title: "Agit Kabayel: I Hate Trash Talk, We Will See Who Is Next",
      time: "35m",
    },
    {
      title: "Hernandez Open To Offers After Matchroom Contract Ends",
      time: "40m",
    },
    {
      title: "Itauma Targets Schwarz And Calls Out Dacres",
      time: "50m",
    },
    {
      title: "Khamukov Tops De La Cruz In Redwood",
      time: "60m",
    },
  ];

  return NextResponse.json(newsFeed);
}
