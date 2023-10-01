import {
  DependencyList,
  EffectCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

export const useSkipInitialEffect = (
  effectCallback: EffectCallback,
  deps?: DependencyList
) => {
  const isInitialRender = useRef<boolean>(true);

  useEffect(() => {
    let effectCleanup: ReturnType<typeof effectCallback> = () => {};
    if (isInitialRender.current) isInitialRender.current = false;
    else {
      effectCleanup = effectCallback();
    }
    if (effectCleanup) return effectCleanup;
  }, deps);
};

export const useSkipInitialLayoutEffect = (
  effectCallback: EffectCallback,
  deps?: DependencyList
) => {
  const isInitialRender = useRef<boolean>(true);

  useLayoutEffect(() => {
    let effectCleanup: ReturnType<typeof effectCallback> = () => {};
    if (isInitialRender.current) isInitialRender.current = false;
    else {
      effectCleanup = effectCallback();
    }
    if (effectCleanup) return effectCleanup;
  }, deps);
};
