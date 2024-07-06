import { useMemo } from 'react';

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (type: string) => {
  switch (type) {
    case 'secondary': {
      return 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white';
    }
    default: {
      return 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700';
    }
  }

}

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

interface ButtonProps {
  children: HTMLElement | string,
  themeColor: 'primary' | 'secondary',
  size: 'small' | 'large' | 'medium',
  isLoading: boolean,
  isDisabled: boolean,
  startIcon: HTMLElement| null,
  endIcon: HTMLElement | null,
  onClick: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children="",
  themeColor='primary',
  size='medium',
  isLoading=false,
  isDisabled=false,
  startIcon= null,
  endIcon= null,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(themeColor);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [themeColor, size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
      <div>Loading</div>
      )}
      {startIcon && {startIcon}}
      <span>{children}</span>
      {endIcon && {endIcon}}
    </button>
  );
};
