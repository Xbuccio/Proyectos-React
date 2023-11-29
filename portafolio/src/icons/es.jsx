import { Icon } from '@iconify/react';
import html5Icon from '@iconify/icons-devicon/html5';
import css3Icon from '@iconify/icons-devicon/css3';
import jsIcon from '@iconify/icons-devicon/javascript';
import tsIcon from '@iconify/icons-logos/typescript';
import githubIcon from '@iconify/icons-logos/github-icon';
import reactIcon from '@iconify/icons-logos/react';

export const TypeScriptIcon = (props) => <Icon icon={tsIcon} {...props} className="icons" />;
export const GitHubIcon = (props) => <Icon icon={githubIcon} {...props} className="icons" />;
export const ReactIcon = (props) => <Icon icon={reactIcon} {...props} className="icons" />;
export const HTML5Icon = (props) => <Icon icon={html5Icon} {...props} className="icons" />;
export const CSS3Icon = (props) => <Icon icon={css3Icon} {...props} className="icons"/>;
export const JavaScriptIcon = (props) => <Icon icon={jsIcon} {...props} className="icons"/>;
