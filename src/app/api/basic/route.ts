import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame DragonBaldZ</title>
    <meta property="og:image" content="https://dragonbaldz.vercel.app/dragonbaldz.jpg" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://dragonbaldz.vercel.app/dragonbaldz.jpg" />
    <meta property="fc:frame:button:1" content="Confirm NFT Mint" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://uplink.wtf/bamehouse/mintboard" />
  </head></html>`)
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
