import { notFound } from 'next/navigation'
import { getArticleBySlug, newsArticles } from '@/lib/data/news-data'
import NewsDetailPage from '@/components/news-detail-page'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: `${article.title} | HIMATIF USB YPKP`,
    description: article.excerpt,
  }
}

export default async function NewsSlugPage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return <NewsDetailPage article={article} />
}