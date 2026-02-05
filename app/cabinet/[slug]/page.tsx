import CabinetDetailHero from '@/components/cabinet-detail-hero'
import LeadershipTeam from '@/components/leadership-team'

export default async function CabinetDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  return (
    <>
      <CabinetDetailHero slug={slug} />
      <LeadershipTeam cabinetSlug={slug} />
    </>
  )
}

export function generateStaticParams() {
  return [
    { slug: 'cyberpunk' },
    { slug: 'no-mans-sky' },
    { slug: 'solaris' },
  ]
}