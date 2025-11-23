'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Shirt, Package, ArrowRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  description: string
  image: string
  icon: any
  colors: string[]
}

interface Props {
  onSelectProduct: (id: number) => void
}

export default function ProductsGrid({ onSelectProduct }: Props) {
  const products: Product[] = [
    {
      id: 1,
      name: 'Official Logo T-Shirt',
      category: 'Apparel',
      price: 19.99,
      description: 'Comfortable cotton t-shirt featuring the Student Association logo.',
      image: 'shirt',
      icon: Shirt,
      colors: ['Black', 'White', 'Green'],
    },
    {
      id: 2,
      name: 'Campus Hoodie',
      category: 'Apparel',
      price: 34.99,
      description: 'Cozy hoodie perfect for campus life. Embroidered SA logo on chest.',
      image: 'hoodie',
      icon: Shirt,
      colors: ['Black', 'Gray', 'Green'],
    },
    {
      id: 3,
      name: 'Vintage Cap',
      category: 'Accessories',
      price: 16.99,
      description: 'Classic adjustable cap with embroidered logo. Great for any occasion.',
      image: 'cap',
      icon: Package,
      colors: ['Black', 'Khaki', 'Green'],
    },
    {
      id: 4,
      name: 'Water Bottle',
      category: 'Accessories',
      price: 24.99,
      description: 'Durable stainless steel water bottle. Keep hydrated in style.',
      image: 'bottle',
      icon: Package,
      colors: ['Black', 'Silver'],
    },
    {
      id: 5,
      name: 'Backpack',
      category: 'Accessories',
      price: 44.99,
      description: 'Spacious laptop backpack with SA branding. Perfect for campus and beyond.',
      image: 'backpack',
      icon: Package,
      colors: ['Black', 'Gray'],
    },
    {
      id: 6,
      name: 'Sticker Pack',
      category: 'Digital',
      price: 4.99,
      description: 'Set of 5 vibrant SA stickers. Decorate your laptop, phone, or water bottle.',
      image: 'stickers',
      icon: Package,
      colors: [],
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Apparel: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Accessories: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      Digital: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
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

                <div className="relative bg-linear-to-br from-primary/20 to-primary/10 h-48 flex items-center justify-center overflow-hidden">
                  <Icon className="text-primary/30 absolute" size={80} />
                  <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {product.category}
                  </span>
                </div>

                <div className="relative z-10 p-6 flex flex-col grow">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 grow">
                    {product.description}
                  </p>

                  {product.colors.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground/70 mb-2">Available Colors:</p>
                      <div className="flex gap-2">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-5 h-5 rounded-full border border-primary/20 transition-transform hover:scale-110"
                            style={{
                              backgroundColor: color === 'Black' ? '#000' : color === 'White' ? '#fff' : color === 'Green' ? '#22c55e' : color === 'Gray' ? '#999' : color === 'Khaki' ? '#d4af37' : color === 'Silver' ? '#c0c0c0' : '#ccc',
                            }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                      <ShoppingCart size={16} />
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