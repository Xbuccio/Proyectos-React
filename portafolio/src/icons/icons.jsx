import { Icon } from '@iconify/react';
import html5Icon from '@iconify/icons-devicon/html5';
import css3Icon from '@iconify/icons-devicon/css3';
import jsIcon from '@iconify/icons-devicon/javascript';
import reactIcon from '@iconify/icons-logos/react';
import tailwindIcon from '@iconify/icons-logos/tailwindcss-icon';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import languagesIcon from '@iconify-icons/lucide/languages';


export const ReactIcon = (props) => <Icon icon={reactIcon} {...props} className="icons" />;
export const HTML5Icon = (props) => <Icon icon={html5Icon} {...props} className="icons" />;
export const CSS3Icon = (props) => <Icon icon={css3Icon} {...props} className="icons"/>;
export const JavaScriptIcon = (props) => <Icon icon={jsIcon} {...props} className="icons"/>;
export const Tailwindcss = (props) => <Icon icon={tailwindIcon} {...props} className="icons"/>;
export const NodeJs = (props) => <Icon icon={nodejsIcon} {...props} className="icons"/>
export const LanguageIcon = (props) => <Icon icon={languagesIcon} {...props}/>


export const TypeScriptIcon = (props) => <Icon icon="devicon:typescript" {...props} className="icons" />;
export const Astro = (props) => <Icon icon="devicon:astro" {...props} className="icons"/>
export const Vite = (props) => <Icon icon="logos:vitejs" {...props} className="icons"/>
export const Sass = (props) => <Icon icon="logos:sass" {...props} className="icons"/>
export const Python = (props) => <Icon icon="logos:python" {...props} className="icons"/>
export const Figma = (props) => <Icon icon="logos:figma" {...props} className="icons"/>