import DivisionDetailInti from '@/components/division-details/division-detail-inti'
import DivisionDetailHRDO from '@/components/division-details/division-detail-hrdo'
import DivisionDetailPR from '@/components/division-details/division-detail-pr'
import DivisionDetailRE from '@/components/division-details/division-detail-re'
import DivisionDetailCnB from '@/components/division-details/division-detail-cnb'
import { notFound } from 'next/navigation'

const divisionComponents = {
  'inti': DivisionDetailInti,
  'hrdo': DivisionDetailHRDO,
  'public-relations': DivisionDetailPR,
  'research-education': DivisionDetailRE,
  'creative-business': DivisionDetailCnB
}

export function generateStaticParams() {
  return [
    { slug: 'inti' },
    { slug: 'hrdo' },
    { slug: 'public-relations' },
    { slug: 'research-education' },
    { slug: 'creative-business' }
  ]
}

export default async function DivisionDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  const Component = divisionComponents[slug as keyof typeof divisionComponents]
  
  if (!Component) {
    notFound()
  }
  
  return <Component />
}