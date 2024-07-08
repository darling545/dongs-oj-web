export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './user/login' },
      // { path: '/user/register', component: './User/Register' },
    ],
  },
  { path: '/welcome', icon: 'smile', component: './Welcome', name: '欢迎页' },
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { icon: 'table', path: '/admin/user', component: './user/manageTable', name: '用户管理' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
