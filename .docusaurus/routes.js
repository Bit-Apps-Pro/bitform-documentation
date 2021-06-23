
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','6d3'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','a95'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','ac9'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','74a'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','7aa'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','0a4'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','ac5'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','c28'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','659'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','3a6'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','df5'),
  exact: true,
},
{
  path: '/docs/changelog/BitForm-changelog-timeline',
  component: ComponentCreator('/docs/changelog/BitForm-changelog-timeline','957'),
  exact: true,
},
{
  path: '/docs/changelog/BitForm-version-1.3-changelog',
  component: ComponentCreator('/docs/changelog/BitForm-version-1.3-changelog','e91'),
  exact: true,
},
{
  path: '/docs/changelog/BitForm-version-1.4-changelog',
  component: ComponentCreator('/docs/changelog/BitForm-version-1.4-changelog','7fc'),
  exact: true,
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1','392'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/How-to-create-a-WordPress-from-using-BitForm',
  component: ComponentCreator('/docs/How-to-create-a-WordPress-from-using-BitForm','21c'),
  exact: true,
},
{
  path: '/docs/install-activate-wordpress-frombuilder-bitform',
  component: ComponentCreator('/docs/install-activate-wordpress-frombuilder-bitform','242'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
{
  path: '/docs/wpbitform-checkboxfield',
  component: ComponentCreator('/docs/wpbitform-checkboxfield','644'),
  exact: true,
},
{
  path: '/docs/wpbitform-countryfield',
  component: ComponentCreator('/docs/wpbitform-countryfield','adb'),
  exact: true,
},
{
  path: '/docs/wpbitform-drop-downfield',
  component: ComponentCreator('/docs/wpbitform-drop-downfield','2ae'),
  exact: true,
},
{
  path: '/docs/wpbitform-field-types',
  component: ComponentCreator('/docs/wpbitform-field-types','28e'),
  exact: true,
},
{
  path: '/docs/wpbitform-multilinetextfield',
  component: ComponentCreator('/docs/wpbitform-multilinetextfield','b9d'),
  exact: true,
},
{
  path: '/docs/wpbitform-numberfield',
  component: ComponentCreator('/docs/wpbitform-numberfield','5bb'),
  exact: true,
},
{
  path: '/docs/wpbitform-radiobuttonfield',
  component: ComponentCreator('/docs/wpbitform-radiobuttonfield','a74'),
  exact: true,
},
{
  path: '/docs/wpbitform-textfield',
  component: ComponentCreator('/docs/wpbitform-textfield','e8d'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
