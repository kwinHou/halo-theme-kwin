import { modeWatcher } from '../components/mode-watcher';
import { sidebarExpand } from '../components/sidebar-expand';

export function initSidebar() {
  modeWatcher();
  sidebarExpand();
}