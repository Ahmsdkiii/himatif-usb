'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Info, Star, ChevronRight, Home, MessageCircle, Package } from 'lucide-react'

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
  packages: string[]
  specs: ProductSpecs
  image: string
}

export default function ProductDetail({ productId, onBack }: Props) {
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [customerName, setCustomerName] = useState<string>('')
  const [customerPhone, setCustomerPhone] = useState<string>('')
  const [showOrderForm, setShowOrderForm] = useState<boolean>(false)

  const products: Record<number, Product> = {
    1: {
      name: 'Jasa Pembuatan Website',
      price: 2500000,
      category: 'Jasa Digital',
      rating: 4.9,
      reviews: 87,
      description: 'Layanan pembuatan website profesional untuk kebutuhan bisnis, organisasi, atau personal Anda dengan teknologi terkini dan desain modern.',
      details: [
        'Desain website modern dan responsif',
        'Optimasi SEO untuk mesin pencari',
        'Loading cepat dan performa optimal',
        'Admin panel untuk kelola konten',
        'Gratis maintenance 3 bulan',
        'Gratis domain .com untuk 1 tahun',
        'SSL Certificate gratis',
        'Training penggunaan website',
      ],
      packages: ['Landing Page', 'Company Profile', 'E-Commerce', 'Custom'],
      specs: {
        'Waktu Pengerjaan': '7-14 hari',
        'Revisi': 'Unlimited',
        'Teknologi': 'Next.js, React, Tailwind',
        'Hosting': '1 Tahun Gratis',
      },
      image: '/assets/img/products/jasa-web.png',
    },
    2: {
      name: 'Jasa Desain Grafis',
      price: 500000,
      category: 'Jasa Digital',
      rating: 4.8,
      reviews: 124,
      description: 'Layanan desain grafis profesional untuk berbagai kebutuhan branding, marketing, dan promosi Anda dengan hasil berkualitas tinggi.',
      details: [
        'Desain original dan kreatif',
        'File format lengkap (AI, PSD, PNG, JPG)',
        'Revisi hingga puas',
        'Konsultasi desain gratis',
        'Commercial use rights',
        'Brand guideline (untuk paket logo)',
        'Mockup presentasi',
        'Fast response dan deadline tepat',
      ],
      packages: ['Logo', 'Poster', 'Banner', 'Social Media', 'Custom'],
      specs: {
        'Waktu Pengerjaan': '3-5 hari',
        'Revisi': '3x Revisi',
        'Format File': 'AI, PSD, PNG, JPG, PDF',
        'Ukuran': 'Custom sesuai kebutuhan',
      },
      image: '/assets/img/products/jasa-desain.png',
    },
    3: {
      name: 'Jaket Himpunan',
      price: 175000,
      category: 'Merchandise',
      rating: 4.9,
      reviews: 156,
      description: 'Jaket resmi Himpunan Mahasiswa dengan bahan berkualitas premium, desain eksklusif, dan kenyamanan maksimal untuk kegiatan kampus.',
      details: [
        'Bahan fleece premium tebal dan hangat',
        'Sablon/bordir logo Himatif berkualitas',
        'Resleting YKK anti rusak',
        'Kantong dalam dan luar',
        'Jahitan rapi dan kuat',
        'Warna tidak mudah pudar',
        'Nyaman dipakai sehari-hari',
        'Pre-order 2-3 minggu',
      ],
      packages: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: {
        Material: 'Fleece Premium',
        Berat: '±400 gram',
        Jenis: 'Zipper Hoodie',
        'Cara Perawatan': 'Cuci dengan tangan/mesin',
      },
      image: '/assets/img/products/jahim.png',
    },
  }

  const product = products[productId] || products[1]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      'Jasa Digital': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
      'Merchandise': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
    }
    return colors[category] || { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' }
  }

  const colors = getCategoryColor(product.category)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleOrderNow = () => {
    if (!selectedPackage) {
      alert('Silakan pilih paket/ukuran terlebih dahulu!')
      return
    }
    setShowOrderForm(true)
  }

  const handleWhatsAppOrder = () => {
    if (!customerName.trim()) {
      alert('Silakan masukkan nama Anda!')
      return
    }
    if (!customerPhone.trim()) {
      alert('Silakan masukkan nomor WhatsApp Anda!')
      return
    }

    const totalPrice = product.price * quantity
    const whatsappNumber = '6281462251984'
    
    const message = `*HIMATIF - Pesanan Baru*

*Informasi Customer:*
Nama: ${customerName}
No. WhatsApp: ${customerPhone}

*Detail Produk:*
Produk: ${product.name}
Kategori: ${product.category}
${product.category === 'Merchandise' ? 'Ukuran' : 'Paket'}: ${selectedPackage}
Jumlah: ${quantity}
Harga per Item: ${formatPrice(product.price)}

*Total Harga: ${formatPrice(totalPrice)}*

Saya ingin memesan produk ini. Mohon konfirmasi ketersediaan dan detail pembayaran.

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

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
          <span className="font-medium">Kembali ke Toko</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
        >
          <Home size={16} />
          <ChevronRight size={16} className="text-muted-foreground/50" />
          <span>Toko</span>
          <ChevronRight size={16} className="text-muted-foreground/50" />
          <span className="text-primary">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden sticky top-24 h-[500px]"
          >
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md ${colors.bg} ${colors.text} border ${colors.border}`}>
                  {product.category}
                </span>
              </div>
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
                  {product.rating} ({product.reviews} ulasan)
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
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground">Mulai dari</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{formatPrice(product.price)}</div>
              <p className="text-muted-foreground text-sm">Harga dapat bervariasi tergantung paket yang dipilih</p>
            </motion.div>

            {!showOrderForm ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-8"
                >
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Pilih {product.category === 'Merchandise' ? 'Ukuran' : 'Paket'}: <span className="text-primary">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.packages.map((pkg, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all hover:scale-105 active:scale-95 text-sm ${
                          selectedPackage === pkg
                            ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                            : 'border-primary/20 bg-card/40 text-foreground hover:border-primary/40'
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {product.category !== 'Jasa Digital' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <label className="block text-sm font-semibold text-foreground mb-4">
                      Jumlah:
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 rounded-xl border-2 border-primary/20 bg-card/40 hover:border-primary/40 hover:bg-primary/10 transition-all font-bold text-lg"
                      >
                        -
                      </button>
                      <span className="text-2xl font-bold text-foreground w-16 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 rounded-xl border-2 border-primary/20 bg-card/40 hover:border-primary/40 hover:bg-primary/10 transition-all font-bold text-lg"
                      >
                        +
                      </button>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={handleOrderNow}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg mb-8"
                >
                  <Package size={22} />
                  Pesan Sekarang via WhatsApp
                </motion.button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 mb-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle size={24} className="text-primary" />
                  Lengkapi Pesanan Anda
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="bg-background/50 rounded-xl p-4 border border-primary/20">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">Produk:</span>
                      <span className="font-semibold text-foreground text-right">{product.name}</span>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">{product.category === 'Merchandise' ? 'Ukuran' : 'Paket'}:</span>
                      <span className="font-semibold text-primary">{selectedPackage}</span>
                    </div>
                    {product.category !== 'Jasa Digital' && (
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-muted-foreground">Jumlah:</span>
                        <span className="font-semibold text-foreground">{quantity}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-start pt-3 border-t border-primary/20 mt-3">
                      <span className="text-sm font-semibold text-foreground">Total:</span>
                      <span className="font-bold text-primary text-lg">{formatPrice(product.price * quantity)}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Nama Lengkap: <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Nomor WhatsApp: <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowOrderForm(false)}
                    className="flex-1 px-6 py-3 rounded-xl border-2 border-primary/20 bg-card/40 hover:border-primary/40 text-foreground font-semibold transition-all hover:scale-105 active:scale-95"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-600/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Kirim ke WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
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
              <h3 className="font-bold text-foreground text-xl">Detail Produk</h3>
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
            <h3 className="font-bold text-foreground text-lg mb-6">Spesifikasi</h3>
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
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ulasan Pelanggan</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            Produk ini memiliki <span className="text-primary font-semibold">{product.reviews} ulasan pelanggan</span> dengan rating rata-rata <span className="text-primary font-semibold">{product.rating}/5 bintang</span>. Terima kasih atas kepercayaan Anda pada produk dan layanan Himpunan Mahasiswa!
          </p>
        </motion.div>
      </div>
    </section>
  )
}