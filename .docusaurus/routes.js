
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','e08'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','d57'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','36e'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','14a'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','b8d'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','e3d'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','af1'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','7bf'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','c63'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','727'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','df5'),
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
