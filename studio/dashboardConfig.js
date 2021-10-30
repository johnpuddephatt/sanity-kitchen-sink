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
                  buildHookId: '617d34fe502beeda1c0f8a1e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ycd6779k',
                  apiId: 'ac02c80b-9646-4535-a181-0a2f9feeb93b'
                },
                {
                  buildHookId: '617d34ff39ce6fb74ca1fcd6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xzh1fxrd',
                  apiId: 'a17efee6-1a88-42df-89ec-b2fb89e6ded6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnpuddephatt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xzh1fxrd.netlify.app', category: 'apps'}
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
