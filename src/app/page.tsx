'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectToHome() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // 👈 change this to '/dashboard' if needed
  }, [router]);

  return null;
}
