'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Info, Star, ChevronRight, Home } from 'lucide-react'

interface Props {
  productId: number
  onBack: () => void
}

interface ProductSpecs {
  [key: string]: string | number
}

interface Product {
  name: string
  price: number
  category: string
  rating: number
  reviews: number
  description: string
  details: string[]
  colors: string[]
  specs: ProductSpecs
}

export default function ProductDetail({ productId, onBack }: Props) {
  const products: Record<number, Product> = {
    1: {
      name: 'Official Logo T-Shirt',
      price: 19.99,
      category: 'Apparel',
      rating: 4.8,
      reviews: 145,
      description: 'Comfortable cotton t-shirt featuring the Student Association logo. Perfect for showing your school spirit!',
      details: [
        '100% premium cotton',
        'Comfortable fit',
        'Available in XS-XXL',
        'Screen-printed SA logo',
        'Machine washable',
      ],
      colors: ['Black', 'White', 'Green'],
      specs: {
        Material: '100% Cotton',
        Weight: '5.3 oz/yd²',
        Fit: 'Unisex',
        Sizes: 'XS-XXL',
      },
    },
    2: {
      name: 'Campus Hoodie',
      price: 34.99,
      category: 'Apparel',
      rating: 4.9,
      reviews: 98,
      description: 'Cozy hoodie perfect for campus life. Features embroidered SA logo on chest and kangaroo pocket.',
      details: [
        '80% cotton, 20% polyester blend',
        'Double-stitched construction',
        'Embroidered chest logo',
        'Kangaroo pocket',
        'Available in XS-XXL',
      ],
      colors: ['Black', 'Gray', 'Green'],
      specs: {
        Material: '80% Cotton, 20% Poly',
        Weight: '9.5 oz/yd²',
        Fit: 'Unisex',
        Sizes: 'XS-XXL',
      },
    },
    3: {
      name: 'Vintage Cap',
      price: 16.99,
      category: 'Accessories',
      rating: 4.6,
      reviews: 67,
      description: 'Classic adjustable cap with embroidered logo. Great for any occasion.',
      details: [
        'Adjustable back strap',
        'Embroidered SA logo',
        'Cotton twill fabric',
        '100% breathable',
        'One size fits most',
      ],
      colors: ['Black', 'Khaki', 'Green'],
      specs: {
        Material: 'Cotton Twill',
        Closure: 'Adjustable Strap',
        Size: 'One Size',
        Logo: 'Embroidered',
      },
    },
    4: {
      name: 'Water Bottle',
      price: 24.99,
      category: 'Accessories',
      rating: 4.7,
      reviews: 112,
      description: 'Durable stainless steel water bottle. Keep hydrated in style while showing your SA pride.',
      details: [
        'Double-wall insulated',
        'Keeps drinks cold for 24 hours',
        'Keeps drinks hot for 12 hours',
        'BPA-free',
        'Leak-proof lid',
        'Capacity: 18 oz',
      ],
      colors: ['Black', 'Silver'],
      specs: {
        Material: 'Stainless Steel',
        Capacity: '18 oz',
        Insulation: 'Double-Wall',
        Lid: 'Leak-Proof',
      },
    },
    5: {
      name: 'Backpack',
      price: 44.99,
      category: 'Accessories',
      rating: 4.8,
      reviews: 89,
      description: 'Spacious laptop backpack with SA branding. Perfect for carrying your essentials to class and beyond.',
      details: [
        'Fits laptops up to 15.6 inches',
        'Multiple compartments',
        'Padded laptop sleeve',
        'Water-resistant material',
        'Ergonomic straps',
        'USB charging port',
      ],
      colors: ['Black', 'Gray'],
      specs: {
        Material: 'Water-Resistant Nylon',
        'Laptop Size': 'Up to 15.6"',
        Compartments: 'Multi-compartment',
        Capacity: '25L',
      },
    },
    6: {
      name: 'Sticker Pack',
      price: 4.99,
      category: 'Digital',
      rating: 4.5,
      reviews: 203,
      description: 'Set of 5 vibrant SA stickers. Decorate your laptop, phone, water bottle, or anywhere else!',
      details: [
        'Set of 5 stickers',
        'Weather-resistant vinyl',
        'Easy to peel and apply',
        'No residue when removed',
        'Vibrant colors',
      ],
      colors: [],
      specs: {
        'Stickers per Pack': '5',
        Material: 'Vinyl',
        Weather: 'Resistant',
        'Max Size': '3" x 3"',
      },
    },
  }

  const product = products[productId] || products[1]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Apparel: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      Accessories: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
      Digital: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const colors = getCategoryColor(product.category)

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Shop</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
        >
          <Home size={16} />
          <ChevronRight size={16} className="text-muted-foreground/50" />
          <span>Shop</span>
          <ChevronRight size={16} className="text-muted-foreground/50" />
          <span className="text-primary">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl h-96 flex items-center justify-center sticky top-24"
          >
            <div className="text-center">
              <div className="text-8xl font-bold text-primary/20 mb-4">{product.name.charAt(0)}</div>
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                {product.category}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{product.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 pb-8 border-b border-primary/20"
            >
              <div className="text-5xl font-bold text-primary mb-3">${product.price}</div>
              <p className="text-muted-foreground text-sm">Free shipping pada orders over $50</p>
            </motion.div>

            {product.colors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-8"
              >
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Select Color:
                </label>
                <div className="flex gap-4">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary transition-all hover:scale-110 active:scale-95"
                      style={{
                        backgroundColor: color === 'Black' ? '#000' : color === 'White' ? '#fff' : color === 'Green' ? '#22c55e' : color === 'Gray' ? '#999' : color === 'Khaki' ? '#d4af37' : color === 'Silver' ? '#c0c0c0' : '#ccc',
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg mb-8"
            >
              <ShoppingCart size={22} />
              Add to Cart
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-2 bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Info size={24} className="text-primary" />
              <h3 className="font-bold text-foreground text-xl">Product Details</h3>
            </div>
            <ul className="space-y-4">
              {product.details.map((detail: string, index: number) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 border border-primary/20 shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">•</span>
                  </div>
                  <span className="text-foreground leading-relaxed pt-0.5">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="font-bold text-foreground text-lg mb-6">Specifications</h3>
            <div className="space-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-muted-foreground text-sm font-medium mb-1">{key}</span>
                  <span className="text-foreground font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-10 md:p-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={28}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}
              />
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Customer Reviews</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            Product ini memiliki <span className="text-primary font-semibold">{product.reviews} customer reviews</span> dengan average rating <span className="text-primary font-semibold">{product.rating}/5 stars</span>. Thank you untuk interest Anda dalam Student Association merchandise!
          </p>
        </motion.div>
      </div>
    </section>
  )
}