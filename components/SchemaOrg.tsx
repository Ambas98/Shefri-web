import { siteConfig } from '@/config/client-config'

const dayToSchema: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

function buildOpeningHours() {
  return Object.entries(siteConfig.hours)
    .filter(([, hours]) => hours !== 'Cerrado')
    .map(([day, hours]) => {
      const [opens, closes] = hours.split(' - ')
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayToSchema[day] ?? day,
        opens,
        closes,
      }
    })
}

export function SchemaOrg() {
  const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
  ].filter(Boolean)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.businessName,
    description: siteConfig.description,
    servesCuisine: siteConfig.cuisine,
    priceRange: siteConfig.priceRange,
    telephone: siteConfig.contact.phone,
    ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'San Juan',
      addressRegion: 'San Juan',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    openingHoursSpecification: buildOpeningHours(),
    ...(siteConfig.heroImage && { image: siteConfig.heroImage }),
    ...(siteConfig.seo?.ogImage && { image: siteConfig.seo.ogImage }),
    ...(sameAs.length > 0 && { sameAs }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
