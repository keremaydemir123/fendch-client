import React from 'react';

type Props = {
  children: React.ReactNode;
  animationName: 'slide-left' | 'slide-right' | 'slide-top' | 'slide-top-bounce' | 'fade-in' | 'fade-out';
  duration: string;
  delay: string;
  repeat?: string;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function Animated({
  children,
  animationName,
  duration,
  delay,
  repeat,
  as,
  className,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const Element = React.createElement(
    as,
    {
      style: {
        opacity: 0,
        animation: `${animationName} ${duration} ease-in-out ${repeat === 'infinite' ? 'infinite' : 'forwards'}`,
        animationDelay: delay,
      },
      className: className,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    },
    children,
  );

  return Element;
}

export default Animated;
