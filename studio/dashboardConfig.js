export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ece52071d79181f914371a6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5avd3f7z',
                  apiId: 'cca91df1-6bac-4045-8a79-763d95a56fd0'
                },
                {
                  buildHookId: '5ece5207ea85d3ecb58c2c0d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hd1fhsow',
                  apiId: '5e08a333-bdb9-45dd-8490-d5dfbdc88ab2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a5okol/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hd1fhsow.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
