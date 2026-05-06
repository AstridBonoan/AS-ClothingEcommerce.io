import HeroBanner from '../components/HeroBanner'
import PromoGrid from '../components/PromoGrid'
import DepartmentGrid from '../components/DepartmentGrid'
import { departments, homeHero, promoTiles } from '../data/storeData'

export default function HomePage() {
  return (
    <>
      <HeroBanner hero={homeHero} />
      <PromoGrid tiles={promoTiles} />
      <DepartmentGrid items={departments} />
    </>
  )
}
