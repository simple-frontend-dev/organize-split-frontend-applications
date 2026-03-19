export function isFeatureEnabled(feature: string): boolean {
  return Math.random() < 0.5;
}

const startTime = performance.now();

export function measureModuleLoadTime(module: string): number {
  const delta = performance.now() - startTime;
  console.log(`${module} loaded in ${delta.toFixed(2)}ms`);
  return delta;
}
