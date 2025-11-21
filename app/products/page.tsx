'use client'

import { useState } from 'react'
import ProductsHero from '@/components/products-hero'
import ProductsGrid from '@/components/products-grid'
import ProductDetail from '@/components/product-detail'

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  return (
    <main>
      <ProductsHero />
      {selectedProduct === null ? (
        <ProductsGrid onSelectProduct={setSelectedProduct} />
      ) : (
        <ProductDetail productId={selectedProduct} onBack={() => setSelectedProduct(null)} />
      )}
    </main>
  )
}
