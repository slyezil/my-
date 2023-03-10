import '@vaadin/app-layout';
import '@vaadin/avatar';
import '@vaadin/icon';
import '@vaadin/menu-bar';
import '@vaadin/tabs';
import '@vaadin/tabs/vaadin-tab';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { router } from '../index';
import { appStore } from '../stores/app-store';
import { Layout } from './view';

interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

@customElement('main-layout')
export class MainLayout extends Layout {
  render() {
    return html`
      <vaadin-app-layout>
        <header class="box-border flex flex-col w-full" slot="navbar">
          <div class="flex items-center px-l">
            <h1 class="my-m me-auto text-l">${appStore.applicationName}</h1>
          </div>
          <nav class="flex overflow-auto px-m py-xs">
            <ul class="flex gap-s list-none m-0 p-0">
              ${this.getMenuRoutes().map(
                (viewRoute) => html`
                  <li>
                    <a
                      ?highlight=${viewRoute.path == appStore.location}
                      class="flex gap-xs
                  h-m items-center px-s text-body"
                      href=${router.urlForPath(viewRoute.path)}
                    >
                      ${viewRoute.icon
                        ? html`
                            <span
                              class="navicon"
                              style="--mask-image: url('line-awesome/svg/${viewRoute.icon}.svg')"
                              aria-hidden="true"
                            ></span>
                          `
                        : ''}
                      <span class="font-medium text-m whitespace-nowrap">${viewRoute.title}</span>
                    </a>
                  </li>
                `
              )}
            </ul>
          </nav>
        </header>
        <slot></slot>
      </vaadin-app-layout>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('block', 'h-full');
  }

  private getMenuRoutes(): RouteInfo[] {
    return [
      {
        path: 'hello',
        title: 'Hello World',
        icon: 'globe-solid',
      },

      {
        path: 'about',
        title: 'About',
        icon: 'file',
      },

      {
        path: 'card-list',
        title: 'Card List',
        icon: 'list-solid',
      },

      {
        path: 'master-detail',
        title: 'Master-Detail',
        icon: 'columns-solid',
      },

      {
        path: 'hello-world',
        title: 'Hello World2',
        icon: 'globe-solid',
      },

      {
        path: 'person-form',
        title: 'Person Form',
        icon: 'user',
      },

      {
        path: 'hello-world2',
        title: 'Hello World3',
        icon: 'globe-solid',
      },

      {
        path: 'master-detail2',
        title: 'Master-Detail2',
        icon: 'columns-solid',
      },

      {
        path: 'hello-world3',
        title: 'Hello World4',
        icon: 'globe-solid',
      },

      {
        path: 'checkout-form',
        title: 'Checkout Form',
        icon: 'credit-card',
      },

      {
        path: 'hello-world4',
        title: 'Hello World5',
        icon: 'globe-solid',
      },

      {
        path: 'master-detail3',
        title: 'Master-Detail3',
        icon: 'columns-solid',
      },
    ];
  }
}
