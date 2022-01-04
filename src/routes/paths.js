// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/admin';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  portfolio: '/portfolio',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
  market: '/market',
  sell: '/sell',
  walletAssets: '/walletAssets'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    // app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/dashboard'),
    analytics: path(ROOTS_DASHBOARD, '/analytics')
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    newUser: path(ROOTS_DASHBOARD, '/user/new'),
    editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    account: path(ROOTS_DASHBOARD, '/user/account')
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/product'),
    shop: path(ROOTS_DASHBOARD, '/product/shop'),
    product: path(ROOTS_DASHBOARD, '/product/:name'),
    productById: path(ROOTS_DASHBOARD, '/product/nike-air-force-1-ndestrukt'),
    list: path(ROOTS_DASHBOARD, '/product/list'),
    newProduct: path(ROOTS_DASHBOARD, '/product/new'),
    editById: path(ROOTS_DASHBOARD, '/product/nike-blazer-low-77-vintage/edit'),
    checkout: path(ROOTS_DASHBOARD, '/product/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/product/invoice'),
    import: path(ROOTS_DASHBOARD, '/product/import')
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/earning'),
    posts: path(ROOTS_DASHBOARD, '/earning/list'),
    post: path(ROOTS_DASHBOARD, '/earning/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/earning/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/earning/new-post')
  }
};

export const PATH_DOCS = 'https://docs.google.com/presentation/d/18a4VGRX0WH8TjX_gkZWx8lLUHOPm5zHo6HqRkn4XNns';
