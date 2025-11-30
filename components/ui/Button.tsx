import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button: React.FC<ButtonProps> = ({ children, className, variant, size, icon: Icon, iconPosition = 'left', ...props }) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2" />}
    </button>
  );
};

export default Button;