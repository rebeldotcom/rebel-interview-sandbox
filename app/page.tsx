'use-client'

const products = [
  {
    id: 'p1',
    image:
      'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1713',
    title: 'Wireless Headphones',
    price: 79.99,
    description:
      'Comfortable over-ear wireless headphones with noise cancellation and 20 hours of battery life.',
  },
  {
    id: 'p2',
    image:
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1744',
    title: 'Smartwatch Pro',
    price: 199.99,
    description:
      'Stylish smartwatch with heart rate monitoring, GPS, and water resistance up to 50m.',
  },
  {
    id: 'p3',
    image:
      'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500',
    title: 'Ergonomic Office Chair',
    price: 149.99,
    description:
      'Adjustable ergonomic chair with lumbar support, breathable mesh, and smooth-rolling casters.',
  },
  {
    id: 'p4',
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    title: '4K Ultra HD Monitor',
    price: 329.99,
    description:
      'Vivid 27-inch 4K display with ultra-thin bezels, HDR support, and 99% sRGB color accuracy.',
  },
  {
    id: 'p5',
    image:
      'https://images.unsplash.com/photo-1558050032-160f36233a07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    title: 'Mechanical Keyboard',
    price: 119.99,
    description:
      'Tactile mechanical keyboard with RGB backlighting and customizable macro keys for productivity and gaming.',
  },
  {
    id: 'p6',
    image:
      'https://images.unsplash.com/photo-1633381638729-27f730955c23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    title: 'Wireless Charging Pad',
    price: 39.99,
    description:
      'Fast-charging Qi-compatible pad with anti-slip surface and LED charging indicator.',
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Hello world!</p>
    </div>
  )
}
