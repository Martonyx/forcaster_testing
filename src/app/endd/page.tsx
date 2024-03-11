import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'DragonBaldz',
    description: 'A Farcaster Frame For DragonBaldz',
    openGraph: {
      title: 'DragonBaldZ Frame',
      description: 'A Farcaster Frame for DragonBaldZ',
      images: [`https://dragonbaldz.vercel.app/dragonbaldz.jpg`],
    },
    other: {
      'fc:frame': 'vNext',
      'fc:frame:image': `https://dragonbaldz.vercel.app/dragonbaldz.jpg`,
      'fc:frame:image:aspect_ratio': '1.91:1',
      'fc:frame:post_url': `https://dragonbaldz.vercel.app/api/basic`,
      'fc:frame:button:1': 'Mint R.I.P AKIRA',
    },
  }

export default function Page() {
  return (
    <div>
      <h1>Basic Frame</h1>
    </div>
  )
}
