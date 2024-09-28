// src/components/layout/Providers.tsx
'use client'; // Mark this as a Client Component

import React from 'react';
import { RecoilRoot } from 'recoil';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;
