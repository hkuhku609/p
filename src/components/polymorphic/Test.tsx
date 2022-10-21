import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
  //update
  size?: 'sm' | 'md' | 'ig';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: E; //update
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
export const Text = <E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  //update
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
