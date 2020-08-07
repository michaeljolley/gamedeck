import { adminGuard } from '@/plugins/auth/adminGuard'

import Admin_Layout from './Layout'
import Admin_Root from './Index'
import Admin_Contestants_Index from './contestants/Index'
import Admin_Challenges_Index from './challenges/Index'
import Admin_Sessions_Index from './sessions/Index'

export default {
  path: '/admin',
  beforeEnter: adminGuard,
  component: Admin_Layout,
  children: [
    {
      path: '',
      component: Admin_Root
    },
    {
      path: 'challenges',
      component: Admin_Challenges_Index
    },
    {
      path: 'contestants',
      component: Admin_Contestants_Index
    },
    {
      path: 'sessions',
      component: Admin_Sessions_Index
    }
  ]
}