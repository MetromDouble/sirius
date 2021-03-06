import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const InterfaceIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M13 1H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM4.5 13.5c-1.1 0-2-.9-2-2v-2c0-.6-.4-1-1-1v-1c.6 0 1-.4 1-1v-2c0-1.1.9-2 2-2v1c-.6 0-1 .4-1 1v2c0 .6-.3 1.1-.7 1.5.4.4.7.9.7 1.5v2c0 .6.4 1 1 1v1zM5 9c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm3 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm2-1c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zm4.5.5c-.6 0-1 .4-1 1v2c0 1.1-.9 2-2 2v-1c.6 0 1-.4 1-1v-2c0-.6.3-1.1.7-1.5-.4-.4-.7-.9-.7-1.5v-2c0-.6-.4-1-1-1v-1c1.1 0 2 .9 2 2v2c0 .6.4 1 1 1v1z"/>
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
