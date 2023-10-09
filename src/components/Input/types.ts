import { TextInputProps } from 'flowbite-react';

export type InputProps = {
  label?: string;
  error?: string;
} & TextInputProps;
