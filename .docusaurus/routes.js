
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','548'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','7fb'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','aac'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','0a1'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','f83'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','962'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','0c8'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','929'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','6da'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','3d3'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','b73'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','7d1'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','6f8'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
