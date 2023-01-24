
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'connexion', component: () => import('pages/ConnexionPage.vue') },
      { path: 'compte', component: () => import('pages/ComptePage.vue') },
      { path: 'capteurs', component: () => import('pages/CapteursPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
