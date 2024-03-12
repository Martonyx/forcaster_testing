import type { Metadata } from 'next'
import MintPage from '..//mint/MintPage';


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
      'fc:frame:post_url': `http://dragonbaldz.vercel.app`,
      'fc:frame:button:1': 'Mint R.I.P AKIRA',
      "fc:frame:button:1:action": "link",
      "fc:frame:button:1:target": "https://zora.co/collect/base:0xf5a706cc0b797dbc51be69d891bd22ac8f6edb6a/" 
    },
  }

export default function Page() {
  return (
    <div>
      <MintPage/>
    </div>
  )
}
