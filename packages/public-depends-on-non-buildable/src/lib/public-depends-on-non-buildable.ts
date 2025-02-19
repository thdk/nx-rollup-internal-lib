// eslint-disable-next-line @nx/enforce-module-boundaries
import { internalNonBuildable } from '@nx-rollup-internal-package/internal-non-buildable';
export function publicDependsOnNonbuildableFn(): string {
  return internalNonBuildable();
}
