
export default function Home() {

  const products = {
    "products": [
      {
        "id": "p1",
        "image": "https://example.com/images/product1.jpg",
        "title": "Wireless Headphones",
        "price": 79.99,
        "description": "Comfortable over-ear wireless headphones with noise cancellation and 20 hours of battery life."
      },
      {
        "id": "p2",
        "image": "https://example.com/images/product2.jpg",
        "title": "Smartwatch Pro",
        "price": 199.99,
        "description": "Stylish smartwatch with heart rate monitoring, GPS, and water resistance up to 50m."
      },
      {
        "id": "p3",
        "image": "https://example.com/images/product3.jpg",
        "title": "Ergonomic Office Chair",
        "price": 149.99,
        "description": "Adjustable ergonomic chair with lumbar support, breathable mesh, and smooth-rolling casters."
      }
    ]
  }

  return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Hello world!</p>
      </div>
    );
}
