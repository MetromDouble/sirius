import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagButtonIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M12.575 4h-9.15C2.638 4 2 4.638 2 5.425v5.15C2 11.362 2.638 12 3.425 12h9.15c.787 0 1.425-.638 1.425-1.425v-5.15C14 4.638 13.362 4 12.575 4zM11 6H4v3H3V5h8v1z"/>
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
