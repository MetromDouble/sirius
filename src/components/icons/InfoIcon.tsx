import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const InfoIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zM6.8 4.3c.2-.1.4-.2.7-.2.2 0 .5.1.6.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.1-.4.2-.6.2-.3 0-.5-.1-.7-.2-.1-.2-.2-.4-.2-.7 0-.3.1-.5.2-.7zm2.7 7.6c-.3.1-.5.1-.7.1-.4 0-.7 0-.9-.1-.3-.1-.5-.2-.6-.4-.2-.3-.3-.5-.4-.7-.1-.3-.1-.6-.1-.9V8.1H5.3V7h2.9v3c0 .3.1.5.2.6.1.1.3.2.6.2h.5c.2 0 .4-.1.6-.2l.2 1c-.3.2-.6.3-.8.3z"/>
    </>
  );

  return onlyPath
  ? path
  : (
    <Icon size={size} {...props}>
      {path}
    </Icon>
  );
};
