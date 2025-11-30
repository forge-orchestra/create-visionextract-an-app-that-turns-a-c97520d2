import React from 'react';
import { LucideIcon, IconProps as LucideIconProps } from 'lucide-react';

interface IconProps extends LucideIconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '', ...props }) => {
  const IconComponent = LucideIcon[name as keyof typeof LucideIcon];

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist in Lucide React.`);
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      color={color}
      className={`inline-block ${className}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
};

export default Icon;