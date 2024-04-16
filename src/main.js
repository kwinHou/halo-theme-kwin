import 'jquery'
window.jquery = $
window.$ = $
import 'bootstrap'
window.bootstrap = bootstrap

import 'tocbot';
import 'magnific-popup';
import 'clipboard';

import './styles/main.scss';
// thirdpart
import "bootstrap/dist/css/bootstrap.css";
import "tocbot/dist/tocbot.css";
import "magnific-popup/dist/magnific-popup.css"

import {basic} from './js/layouts/basic';
import {initSidebar} from "./js/layouts/sidebar";
import {initTopbar} from "./js/layouts/topbar";
import {initPost} from './js/layouts/post';
import {initCategories} from './js/layouts/categories';

basic();
initSidebar();
initTopbar();
initPost();
initCategories();