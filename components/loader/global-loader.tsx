import * as React from "react";

export interface IGlobalLoaderProps {}

export default function GlobalLoader(props: IGlobalLoaderProps) {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated) {
    return null;
  }

  return (
    <div className="fixed z-50 w-full h-full bg-slate-900">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-20 h-20 animate-spin rounded-full border-4 border-solid border-slate-500 border-t-transparent">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
