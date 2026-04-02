import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type ModuleWithDefault<T extends ComponentType<any>> = {
  default: T;
};

const buildRetryKey = (importer: () => Promise<ModuleWithDefault<ComponentType<any>>>) => {
  const source = importer.toString();
  return `lazy-retry:${source}`;
};

export const lazyWithRetry = <T extends ComponentType<any>>(
  importer: () => Promise<ModuleWithDefault<T>>,
): LazyExoticComponent<T> => {
  return lazy(async () => {
    const retryKey = buildRetryKey(importer);
    const hasRetried = typeof window !== "undefined" && window.sessionStorage.getItem(retryKey) === "true";

    try {
      const module = await importer();

      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem(retryKey);
      }

      return module;
    } catch (error) {
      if (typeof window !== "undefined" && !hasRetried) {
        window.sessionStorage.setItem(retryKey, "true");
        window.location.reload();

        return new Promise<ModuleWithDefault<T>>(() => {
          // Wait for page reload.
        });
      }

      throw error;
    }
  });
};