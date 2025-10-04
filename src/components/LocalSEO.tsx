export default function LocalSEO() {
  const localStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Croxono Perfumes - Perfumes en Apartadó y Urabá",
    description: "Tienda de perfumes de lujo en Apartadó, Urabá y toda la región de Antioquia. Perfumes árabes originales, fragancias de diseñador, envío gratis.",
    url: "https://croxono-perfumes-4rnh.onrender.com",
    telephone: "+57 320 3296712",
    email: "contacto@croxono.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressRegion: "Antioquia",
      addressLocality: "Apartadó, Urabá",
      streetAddress: "Región de Urabá",
      postalCode: "057050",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "7.8825",
      longitude: "-76.6258",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Apartadó",
        addressRegion: "Antioquia",
        addressCountry: "CO"
      },
      {
        "@type": "City", 
        name: "Turbo",
        addressRegion: "Antioquia",
        addressCountry: "CO"
      },
      {
        "@type": "City",
        name: "Carepa", 
        addressRegion: "Antioquia",
        addressCountry: "CO"
      },
      {
        "@type": "City",
        name: "Chigorodó",
        addressRegion: "Antioquia", 
        addressCountry: "CO"
      },
      {
        "@type": "City",
        name: "Necoclí",
        addressRegion: "Antioquia",
        addressCountry: "CO"
      },
      {
        "@type": "City",
        name: "Arboletes",
        addressRegion: "Antioquia",
        addressCountry: "CO"
      }
    ],
    openingHours: "Mo-Su 09:00-18:00",
    priceRange: "$$",
    currenciesAccepted: "COP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Perfumes de Lujo en Apartadó y Urabá",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Perfumes para Hombres en Apartadó",
            description: "Los mejores perfumes para hombres en Apartadó, Urabá y toda la región",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Perfumes para Mujeres en Urabá",
            description: "Fragancias exclusivas para mujeres en Urabá, Apartadó y región",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Perfumes Árabes en Apartadó",
            description: "Perfumes árabes originales y exclusivos en Apartadó y Urabá",
          },
        }
      ],
    },
    keywords: [
      "perfumes en apartadó",
      "perfumes en urabá", 
      "perfumes apartadó antioquia",
      "perfumes urabá antioquia",
      "perfumes turbo antioquia",
      "tienda perfumes apartadó",
      "tienda perfumes urabá",
      "perfumes de lujo apartadó",
      "fragancias exclusivas urabá",
      "perfumes árabes apartadó",
      "perfumes originales urabá",
      "perfumes importados apartadó",
      "perfumes para hombres apartadó",
      "perfumes para mujeres urabá"
    ],
    sameAs: [
      "https://www.facebook.com/croxonoperfumes",
      "https://www.instagram.com/croxonoperfumes",
      "https://twitter.com/croxonoperfumes",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localStructuredData) }}
    />
  );
}
