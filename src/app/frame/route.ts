import { NextRequest, NextResponse } from "next/server";
import { PinataFDK } from "pinata-fdk";

const fdk = new PinataFDK({
  pinata_jwt: process.env.PINATA_JWT as string,
  pinata_gateway: process.env.GATEWAY_URL as string,
});

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const frameMetadata = await fdk.getFrameMetadata({
      post_url: `https://uplink.wtf/bamehouse/mintboard`,
      buttons: [{ label: "Mint R.I.P AKIRA", action: "link" }],
      aspect_ratio: "1:1",
      cid: "QmeX8Pe64zC45FFojihyKm93x6XxDPXjKwexL36qRVEs9j",
    });

    return new NextResponse(frameMetadata);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
