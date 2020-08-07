import { authGuard } from '@/plugins/auth/authGuard'

import Game_Layout from './Layout'
import Game_Root from './Index'
import Game_Room_Index from './room/Index'

export default {
  path: "/games",
  component: Game_Layout,
  beforeEnter: authGuard,
  children: [
    {
      path: '',
      component: Game_Root
    },
    {
      path: ':game',
      component: Game_Room_Index
    }
  ]
}