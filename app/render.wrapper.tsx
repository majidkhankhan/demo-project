"use client";

import { usePathname } from "next/navigation";

type Props = { children: any };

function RenderWrapper({ children }: Props) {
  const pathname = usePathname();

  const shouldRenderHeaderFooter = (path) => {
    // Define paths where Header and Footer should not render
    const excludedPaths = ["/WebStrorieD"];

    // Check if current path is in the excluded list
    return !excludedPaths.some((excludedPath) => path.startsWith(excludedPath));
  };
  return shouldRenderHeaderFooter(pathname) ? children : null;
}

export default RenderWrapper;
