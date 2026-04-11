'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavPulse() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector('.site-header');
    if (!nav) return;

    const triggerPulse = () => {
      nav.classList.remove('pulse-active');
      void nav.offsetWidth;
      nav.classList.add('pulse-active');
    };

    triggerPulse();
    const interval = setInterval(triggerPulse, 20000);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}