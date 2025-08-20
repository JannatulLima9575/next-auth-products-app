import Link from 'next/link'


export default function HomePage() {
return (
<div className="space-y-10">
{/* Hero */}
<section className="card text-center py-16">
<h1 className="text-3xl font-bold mb-2">Build with Next.js 15 + NextAuth</h1>
<p className="text-gray-500 dark:text-gray-400">Public & Protected pages with simple product management</p>
<div className="mt-6 flex gap-3 justify-center">
<Link className="btn btn-primary" href="/products">Browse Products</Link>
<Link className="btn" href="/login">Login</Link>
</div>
</section>


{/* Product Highlights */}
<section className="grid md:grid-cols-3 gap-4">
{[1,2,3].map((i) => (
<div key={i} className="card">
<h3 className="font-semibold mb-1">Highlight #{i}</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Fast, SEO-friendly, and secure authentication.</p>
</div>
))}
</section>


{/* Footer */}
<footer className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-6">
© {new Date().getFullYear()} NextAuth Products — All rights reserved.
</footer>
</div>
)
}