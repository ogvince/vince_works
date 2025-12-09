// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'vince.works',
      meta: [
        { name: 'description', content: 'The creative playground of a former web developer and project manager who never stopped designing.' }, // TODO: ajouter la description du site
        { property: 'og:title', content: 'vince.works' }, // TODO: ajouter le titre OG
        { property: 'og:description', content: 'The creative playground of a former web developer and project manager who never stopped designing.' }, // TODO: ajouter la description OG
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vince.works/' },
        { property: 'og:image', content: 'https://vince.works/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'vince.works' }, // TODO: ajouter le titre Twitter
        { name: 'twitter:description', content: 'The creative playground of a former web developer and project manager who never stopped designing.' }, // TODO: ajouter la description Twitter
        { name: 'twitter:image', content: 'https://vince.works/og-image.jpg' },
        { name: 'twitter:url', content: 'https://vince.works/' },
      ],
      link: [{ rel: 'canonical', href: 'https://vince.works/' }],
    },
  },
});
