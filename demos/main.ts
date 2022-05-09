import 'api-viewer-element';
import '@api-viewer/demo';
import '@kamiapp/theme';
import '@kamiapp/transition';
import '@kamiapp/changelog';
import { setProgressBarDelay } from '@hotwired/turbo';
import KamiMarkdown from '@kamiapp/markdown';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import shell from 'highlight.js/lib/languages/shell';
import dark from 'highlight.js/styles/github-dark.css';

import './elements/components/mode';
import './elements/components/button';
import './elements/components/menu';
import './elements/components/component';
import './elements/components/playground';

import './elements/views/home';
import './elements/views/guide';
import './elements/views/components';

import './elements/app';

KamiMarkdown.registerHighlightLanguage('js', javascript);
KamiMarkdown.registerHighlightLanguage('ts', typescript);
KamiMarkdown.registerHighlightLanguage('html', html);
KamiMarkdown.registerHighlightLanguage('sh', shell);
KamiMarkdown.registerHighlightStyle(dark);
setProgressBarDelay(200);
