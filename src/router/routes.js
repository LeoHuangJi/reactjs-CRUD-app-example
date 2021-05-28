import React from 'react';

const About = React.lazy(() => import('./../containers/about'));
const index = React.lazy(() => import('./../containers/index'));
const contact = React.lazy(() => import('./../containers/contact'));
const productByZone = React.lazy(() => import('./../containers/productByZone'));

const routes = [
  { path: '/home', exact: true, name: 'Home' ,component:index},
  { path: '/contact', name: 'Dashboard', component: contact },
  { path: '/about', name: 'Theme', component: About, exact: true },
  { path: '/product/:slug', name: 'Theme', component: productByZone, exact: true },
 
];

export default routes;
