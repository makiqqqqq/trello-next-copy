'use client';

import { theme } from '@/core/theme';
import { FCWithChildren } from '@/utils/types';
import { Flowbite } from 'flowbite-react';
import React from 'react';

const ThemeProvider: FCWithChildren = ({ children }) => {
  return <Flowbite theme={theme}>{children}</Flowbite>;
};

export default ThemeProvider;
