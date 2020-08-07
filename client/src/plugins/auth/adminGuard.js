import { getInstance } from './authPlugin';
import { isInRole } from '@/utils';

export const adminGuard = (to, from, next) => {
  const authService = getInstance();

  const fn = () => {
    // If the user is authenticated and in the admin role, continue with the route
    if (authService.isAuthenticated && isInRole(authService.user['https://GameDeckWut/roles'], 'admin')) {
      return next();
    }

    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn();
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', loading => {
    if (loading === false) {
      return fn();
    }
  });
};
