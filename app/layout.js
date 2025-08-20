import './globals.css'
import Navbar from '@/components/Navbar'
import ClientToaster from '@/components/ClientToaster'


export const metadata = {
title: 'NextAuth Products',
description: 'Simple Next.js 15 + NextAuth app',
}


export default function RootLayout({ children }) {
return (
<html lang="en" suppressHydrationWarning>
<body>
<Navbar />
<main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
<ClientToaster />
</body>
</html>
)
}