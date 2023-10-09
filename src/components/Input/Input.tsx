import React, { forwardRef } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { InputProps } from '@/components/Input/types';
import { capitalizeFirstLetter } from '@/utils/helpers';
import { useId } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error, className, ...inputProps } = props;
  const id = useId();

  return (
    <div>
      {!!label && (
        <Label
          htmlFor={id}
          value={capitalizeFirstLetter(label)}
          className='mb-2 block text-sm font-medium text-gray-900'
        />
      )}
      <TextInput
        id={id}
        className={twMerge(
          'focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 text-gray-900 sm:text-sm',
          className
        )}
        {...(error && {
          helperText: (
            <span className='font-medium text-red-600'>{error}!</span>
          ),
        })}
        ref={ref}
        {...inputProps}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
