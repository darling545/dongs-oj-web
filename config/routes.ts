export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './user/login' },
      { path: '/user/register', component: './user/register' },
    ],
  },
  { path: '/questionView', icon: 'smile', component: './question/questionView', name: '题目列表' },
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
  { path: '/', redirect: '/questionView' },
  { path: '*', layout: false, component: './404' },
];
