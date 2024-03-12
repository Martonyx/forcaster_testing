import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'DragonBaldz',
    description: 'A Farcaster Frame For DragonBaldz',
    openGraph: {
      title: 'DragonBaldZ Frame',
      description: 'A Farcaster Frame for DragonBaldZ',
      images: [`http://dragonbaldz.vercel.app/dragonbaldz.jpg`],
    },
    other: {
      'fc:frame': 'vNext',
      'fc:frame:image': `http://dragonbaldz.vercel.app/dragonbaldz.jpg`,
      'fc:frame:image:aspect_ratio': '1:1',
      'fc:frame:post_url': `https://uplink.wtf/bamehouse/mintboard`,
      'fc:frame:button:1': 'Mint R.I.P AKIRA',
      "fc:frame:button:1:action": "link",
    },
  }

export default function Page() {
  return (
    <div>
      <h1>Basic Frame</h1>
    </div>
  )
}
