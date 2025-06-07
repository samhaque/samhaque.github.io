import React, { Suspense } from 'react';

export function withSuspense<T extends object>(
  Component: React.ComponentType<T>,
  Fallback: React.ReactNode = null
) {
  return function WithSuspense(props: T) {
    return (
      <Suspense fallback={Fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}