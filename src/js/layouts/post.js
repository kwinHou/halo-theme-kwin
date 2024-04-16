import {toc} from '../components/post/post-toc';
import {initClipboard} from '../components/post/post-clipboard';

export function initPost() {
    toc();
    initClipboard();
  }