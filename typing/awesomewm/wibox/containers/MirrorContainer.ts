import { Container } from './Container';

export interface MirrorContainer extends Container {
  reflection: {
    horizontal: boolean;
    vertical: boolean;
  };
}
