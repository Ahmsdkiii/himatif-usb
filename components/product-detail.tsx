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
    return colors[category] || { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20' }
  }

  const colors = getCategoryColor(product.category)

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Shop</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-8"
        >
          <Home size={16} />
          <ChevronRight size={16} className="text-gray-600" />
          <span>Shop</span>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-green-400">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl h-96 flex items-center justify-center sticky top-24"
          >
            <div className="text-center">
              <div className="text-8xl font-bold text-green-400/20 mb-4">{product.name.charAt(0)}</div>
              <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} border ${colors.border}`}>
                {product.category}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{product.name}</h1>
              <p className="text-lg text-gray-300 leading-relaxed">{product.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">${product.price}</div>
              <p className="text-gray-400 text-sm">Free shipping pada orders over $50</p>
            </motion.div>

            {product.colors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <label className="block text-sm font-semibold text-white mb-3">
                  Select Color:
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-green-500/20 hover:border-green-400 transition-colors"
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
              transition={{ delay: 0.6 }}
              className="px-6 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:scale-105 active:scale-95 mb-8 flex items-center justify-center gap-2 text-lg"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Info size={20} className="text-green-400" />
                <h3 className="font-semibold text-white">Product Details</h3>
              </div>
              <ul className="space-y-3">
                {product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex gap-3 text-sm">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 shrink-0 mt-0.5">
                      <span className="text-green-400 text-xs">•</span>
                    </div>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="border-t border-green-500/20 pt-6"
            >
              <h3 className="font-semibold text-white mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400 text-sm">{key}:</span>
                    <span className="font-medium text-white text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-green-500/20 my-12"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Customer Reviews</h3>
          <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                />
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed">
              Product ini memiliki {product.reviews} customer reviews dengan average rating {product.rating} out of 5 stars.
              Thank you untuk interest Anda dalam Student Association merchandise!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}