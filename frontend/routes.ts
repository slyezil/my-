import { Flow } from '@vaadin/flow-frontend';
import type { Route } from '@vaadin/router';
import './views/main-layout';

const { serverSideRoutes } = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports'),
});

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://hilla.dev/docs/routing)
  {
    path: 'hello-world',
    component: 'hello-world2-view',
    icon: 'globe-solid',
    title: 'Hello World2',
    action: async (_context, _command) => {
      await import('./views/helloworld2/hello-world2-view');
      return;
    },
  },
  {
    path: 'master-detail2',
    component: 'master-detail2-view',
    icon: 'columns-solid',
    title: 'Master-Detail2',
    action: async (_context, _command) => {
      await import('./views/masterdetail2/master-detail2-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [
      ...views,
      // for server-side, the next magic line sends all unmatched routes:
      ...serverSideRoutes, // IMPORTANT: this must be the last entry in the array
    ],
  },
];
