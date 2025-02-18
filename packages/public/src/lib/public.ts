import { internalBuildable } from '@nx-rollup-internal-package/internal-buildable';
export function publicFn(): string {
  return internalBuildable();
}
