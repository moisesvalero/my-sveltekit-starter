export const sitePortfolioQuery = `coalesce(
  *[_type == "sitePortfolio" && _id == "portfolioSite"][0],
  *[_type == "sitePortfolio"] | order(_updatedAt desc)[0]
){
  header,
  seo,
  hero,
  about,
  services,
  techStack,
  quality,
  projects{
    meta,
    title,
    "projects": select(
      count(coalesce(projects, [])) > 0 => coalesce(projects[] | order(sortOrder asc), []),
      *[
        _type == "caseStudy" &&
        defined(slug.current) &&
        coalesce(showOnHome, true) == true
      ] | order(coalesce(homeSortOrder, 999) asc, _updatedAt desc){
        "imageSrc": coalesce(images.principal, "/imagenes/captura-Svelte Starter_ember.avif"),
        "imageAlt": coalesce(title, "Proyecto"),
        "destinationUrl": "/proyectos/" + slug.current,
        "title": { "es": coalesce(title, "Proyecto"), "en": coalesce(title, "Project") },
        "description": {
          "es": coalesce(heroDescription, seoDescription, ""),
          "en": coalesce(heroDescription, seoDescription, "")
        },
        "tags": coalesce(tags, []),
        "linkLabel": { "es": "Ver proyecto", "en": "View project" }
      }
    )
  },
  contact,
  footer
}`;
