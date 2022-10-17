export const ROUTES = {
  HOME: '/',
  //@delete:line
  STARTER_DOCS: {
    //@delete:line
    MAIN: '/starter-docs',
    //@delete:line
    THEME_VIEWER: '/starter-docs/theme-viewer',
    //@delete:line
    EXAMPLES: {
      //@delete:line
      MAIN: '/starter-docs/examples',
      //@delete:line
      COUNTER: '/starter-docs/examples/counter',
      //@delete:line
      FORM: '/starter-docs/examples/form',
      //@delete:line
      MODALS: '/starter-docs/examples/modals',
      //@delete:line
      SOCIAL: '/starter-docs/examples/social',
      //@delete:line
      LODASH: '/starter-docs/examples/lodash',
      //@delete:line
      S3_FILE_INPUT: '/starter-docs/examples/file-input',
    },
  },
  LOGIN: {
    MAIN: '/login',
    SIGNUP: '/login/signup',
    SIGNUPSUCCESS: 'login/signupsuccess',
  },
  PRODUCT: {
    MAIN: '/product',
    DETAIL: 'product/detail',
  },
  SHOPPINGCART: {
    MAIN: '/shoppingcart',
  },
  ORDER: {
    MAIN: '/order-product',
    ORDERCOMPLETE: '/order-product/complete',
  },
  MYACCOUNT: {
    MAIN: '/myaccount',
    EDITUSERINFO: '/myaccount/edit-userinfo',
    ORDERLIST: '/myaccount/order-list',
    WITHDRAWAL: '/user-withdrawal',
  },
} as const;
