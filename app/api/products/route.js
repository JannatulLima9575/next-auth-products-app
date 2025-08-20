import { NextResponse } from 'next/server'
import { readProducts, writeProducts } from '@/lib/products'
import { auth } from '@/auth'
import { randomUUID } from 'crypto'


export const dynamic = 'force-dynamic'


export async function GET() {
const products = await readProducts()
return NextResponse.json(products)
}


export async function POST(req) {
const session = await auth()
if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })


const body = await req.json()
const { name, description, price } = body || {}


if (!name || !description || typeof price !== 'number') {
return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
}


const products = await readProducts()
const newItem = { id: randomUUID(), name, description, price }
products.push(newItem)
await writeProducts(products)


return NextResponse.json({ ok: true, product: newItem }, { status: 201 })
}


import { NextResponse } from 'next/server'
import { getProduct } from '@/lib/products'


export const dynamic = 'force-dynamic'


export async function GET(_req, { params }) {
const product = await getProduct(params.id)
if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 })
return NextResponse.json(product)
}