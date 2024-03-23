'use client';

import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const FBPixelComponent: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL_ID!, undefined, {
          autoConfig: true,
          debug: true,
        });
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};

export default FBPixelComponent;
