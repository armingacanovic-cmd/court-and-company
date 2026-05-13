import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const filePath = join(process.cwd(), "public", "court-and-company-onepager.pdf");
  const buffer = readFileSync(filePath);

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="court-and-company-onepager.pdf"',
    },
  });
}
