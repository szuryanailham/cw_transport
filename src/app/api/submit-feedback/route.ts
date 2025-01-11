import { google } from "googleapis";
import { NextResponse } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID!;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL!;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, no_wa, kepuasan, kritikDanSaran, tauLayananKamiDariMana } = body;

    // Validasi input
    if (!name || !kritikDanSaran || !kepuasan || !no_wa) {
      return NextResponse.json({ error: "Name, feedback, and satisfaction are required" }, { status: 400 });
    }

    const auth = new google.auth.JWT(CLIENT_EMAIL, undefined, PRIVATE_KEY, SCOPES);
    const sheets = google.sheets({ version: "v4", auth });

    // Append the new data
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `Sheet1!A:F`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[1, name, no_wa, kepuasan, kritikDanSaran, tauLayananKamiDariMana, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error appending data to spreadsheet:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
