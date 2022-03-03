import { _privileges } from './messages/_privileges';

/**
 * Determines which privileges are needed for a certain message type.
 * @internal
 */
export const ShopwareMessageTypePrivileges = {
  notificationDispatch: {},
  windowRedirect: {},
  windowReload: {},
  contextLanguage: {},
  contextEnvironment: {},
  contextLocale: {},
  contextCurrency: {},
  contextShopwareVersion: {},
  contextAppInformation: {},
  getPageTitle: {},
  uiComponentSectionRenderer: {},
  uiTabsAddTabItem: {},
  locationUpdateHeight: {},
  menuItemAdd: {},
  settingsItemAdd: {},
  mainModuleAdd: {},
  uiModalOpen: {},
  uiModalClose: {},
  actionButtonAdd: {},
  actionExecute: {},
  repositoryGet: {},
  __function__: {},
  __registerWindow__: {},
  _multiply: {},
  _subtract: {},
  _privileges: _privileges,
};