import { promises as fs } from 'fs'
import path from 'path'


const dataFile = path.join(process.cwd(), 'data', 'products.json')


export async function readProducts() {
const json = await fs.readFile(dataFile, 'utf-8')
return JSON.parse(json)
}


export async function writeProducts(products) {
await fs.writeFile(dataFile, JSON.stringify(products, null, 2), 'utf-8')
}


export async function getProduct(id) {
const list = await readProducts()
return list.find((p) => p.id === id)
}