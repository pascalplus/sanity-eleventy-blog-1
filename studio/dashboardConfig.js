export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6243c409b887567104097783',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-1-studio-s363wgwd',
                  apiId: '6a68ce5b-2292-4ca1-afde-ef0a47134b53'
                },
                {
                  buildHookId: '6243c40936d83e6770c484f6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-1-web-ghzsodic',
                  apiId: '43234acb-ec1d-4bbd-8add-a57c5e8e796c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pascalplus/sanity-eleventy-blog-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-1-web-ghzsodic.netlify.app', category: 'apps'}
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
