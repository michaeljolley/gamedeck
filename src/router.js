import VueRouter from 'vue-router';

import { authGuard } from '@/plugins/auth/authGuard'

import Home from '@/components/Home.vue'
import GameDeck from '@/components/GameDeck.vue'
import Lobby from '@/components/Lobby.vue'
import Room from '@/components/Room.vue'

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/deck",
      component: GameDeck,
      beforeEnter: authGuard,
      children: [
        {
          path: '',
          name: "deck",
          component: Lobby
        },
        {
          path: 'room/:game',
          name: 'room',
          component: Room
        }
      ]
    }
  ]
})