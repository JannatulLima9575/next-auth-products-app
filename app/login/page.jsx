import { signIn, auth } from '@/auth'
import { redirect } from 'next/navigation'


export default async function LoginPage() {
const session = await auth()
if (session) redirect('/products')


async function loginWithGoogle() {
'use server'
await signIn('google', { redirectTo: '/products' })
}


return (
<div className="max-w-md mx-auto card">
<h2 className="text-xl font-semibold mb-4">Login</h2>
<form action={loginWithGoogle}>
<button type="submit" className="btn btn-primary w-full">Continue with Google</button>
</form>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-3">After login you will be redirected to Products page.</p>
</div>
)
}