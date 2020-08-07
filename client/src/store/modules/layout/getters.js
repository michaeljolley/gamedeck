import { isInRole } from '@/utils';

export default {
  currentUser: (currentState) => {
    return currentState.user;
  },
  isAdmin: (currentState) => {
    return isInRole(currentState.user.roles, 'admin');
  }
}