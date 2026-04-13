import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import { OnepagerDocument } from "@/app/onepager/document";

export async function GET() {
  const buffer = await renderToBuffer(createElement(OnepagerDocument));

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="court-and-company-onepager.pdf"',
    },
  });
}
