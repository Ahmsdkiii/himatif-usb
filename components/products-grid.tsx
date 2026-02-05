'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Code, Palette, ShoppingBag } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  description: string
  image: string
  icon: any
  sizes: string[]
}

interface Props {
  onSelectProduct: (id: number) => void
}

export default function ProductsGrid({ onSelectProduct }: Props) {
  const products: Product[] = [
    {
      id: 1,
      name: 'Jasa Pembuatan Website',
      category: 'Jasa Digital',
      price: 2500000,
      description: 'Layanan pembuatan website profesional untuk kebutuhan bisnis, organisasi, atau personal Anda.',
      image: '/assets/img/products/jasa-web.png',
      icon: Code,
      sizes: ['Landing Page', 'Company Profile', 'E-Commerce', 'Custom'],
    },
    {
      id: 2,
      name: 'Jasa Desain Grafis',
      category: 'Jasa Digital',
      price: 500000,
      description: 'Layanan desain grafis untuk berbagai kebutuhan seperti logo, poster, banner, dan branding.',
      image: '/assets/img/products/jasa-desain.png',
      icon: Palette,
      sizes: ['Logo', 'Poster', 'Banner', 'Social Media', 'Custom'],
    },
    {
      id: 3,
      name: 'Jaket Himpunan',
      category: 'Merchandise',
      price: 175000,
      description: 'Jaket resmi Himpunan Mahasiswa dengan kualitas premium dan desain eksklusif.',
      image: '/assets/img/products/jahim.png',
      icon: ShoppingBag,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      'Jasa Digital': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      'Merchandise': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product) => {
            const colors = getCategoryColor(product.category)
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => onSelectProduct(product.id)}
                className="group relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Product Image */}
                <div className="relative h-56 bg-linear-to-br from-primary/20 to-primary/10 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {product.category}
                  </span>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 grow">
                    {product.description}
                  </p>

                  {product.sizes.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground/70 mb-2">Paket/Ukuran Tersedia:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.slice(0, 3).map((size, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 3 && (
                          <span className="text-xs px-2 py-1 text-muted-foreground">
                            +{product.sizes.length - 3} lainnya
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Mulai dari</span>
                      <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-sm font-medium">Detail</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}