'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function ProductsPage() {
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')


useEffect(() => {
const load = async () => {
try {
const res = await fetch('/api/products', { cache: 'no-store' })
if (!res.ok) throw new Error('Failed to fetch')
const data = await res.json() }