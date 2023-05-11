import { HookUseEffect } from './HookUseEffect/HookUseEffect';
import { HookUseState } from './HookUseState/HookUseState';
import { OwnHooks } from './OwnHooks/OwnHooks';

export const App = () => {
  return (
    <div>
      <HookUseState />
      <HookUseEffect />
      <OwnHooks />
    </div>
  );
};
