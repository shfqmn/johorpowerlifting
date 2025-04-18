import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Johor Association for Powerlifting (JAP)',
    description:
      'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            {
              type: 'link',
              title: 'Home',
              to: '/'
            },
            {
              type: 'dropdown',
              title: 'About Us',
              children: [
                { type: 'link', title: 'Intro', to: { name: 'intro' } },
                { type: 'link', title: 'Commitee Members', to: { name: 'commitee-members' } },
                { type: 'link', title: 'Affiliated Members', to: { name: 'affiliated-members' } }
              ]
            },
            {
              type: 'dropdown',
              title: 'Coaches',
              children: [
                { type: 'link', title: 'JPCN', to: { name: 'jpcn' } }
              ]
            },
            {
              type: 'link',
              title: 'Events',
              to: { name: 'events' }
            },
            {
              type: 'dropdown',
              title: 'Members',
              children: [
                {
                  type: 'link',
                  title: 'Registration',
                  to: { name: 'register' }
                },
                {
                  type: 'link',
                  title: 'Men\'s State Records',
                  to: { name: 'men-state-records' }
                },
                {
                  type: 'link',
                  title: 'Women\'s State Records',
                  to: { name: 'women-state-records' }
                },
                {
                  type: 'link',
                  title: 'State Athletes',
                  to: { name: 'athletes' }
                }
              ]
            },
            {
              type: 'dropdown',
              title: 'IPF',
              children: [
                {
                  type: 'link',
                  title: 'Technical Rulebook',
                  to: '/ipf/technical-rulebook'
                },
                {
                  type: 'link',
                  title: 'Approved Equipment List',
                  to: '/ipf/approved-list'
                }
              ]
            }
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
  },
})
