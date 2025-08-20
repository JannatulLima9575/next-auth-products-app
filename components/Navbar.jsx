import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { auth, signOut } from '@/auth'


export default async function Navbar() {
const session = await auth()


return (
<header className="border-b border-gray-200 dark:border-gray-800">
<div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
<Link href="/" className="font-semibold">NextAuth Products</Link>
<nav className="flex items-center gap-3">
<Link className="btn btn-outline" href="/products">Products</Link>
{session ? (
<>
<Link className="btn btn-outline" href="/dashboard/add-product">Add Product</Link>
<form action={async () => { 'use server'; await signOut({ redirectTo: '/' }) }}>
<button className="btn" type="submit">Sign out</button>
</form>
</>
) : (
<Link className="btn btn-primary" href="/login">Login</Link>
)}
<ThemeToggle />
</nav>
</div>
</header>
)
}