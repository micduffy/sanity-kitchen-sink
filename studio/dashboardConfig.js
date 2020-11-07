export default {
  widgets: [
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
                  buildHookId: '5fa70c6ee9ded3dae7574393',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ebzz2j3k',
                  apiId: '8bab325c-d25f-4f97-a85d-b0b734393152'
                },
                {
                  buildHookId: '5fa70c6ea4fba8dbc541871b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6qf9gq63',
                  apiId: '22c4f151-3356-45c8-b1d4-35331918d5fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micduffy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6qf9gq63.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
