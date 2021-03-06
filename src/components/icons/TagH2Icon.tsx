import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagH2Icon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.915 4.458v8.046h-1.6V8.956h-2.13v3.548h-1.6V4.458h1.6V7.63h2.13V4.458h1.6zm6.227 2.118a2.1 2.1 0 0 1-.156.8 3.7 3.7 0 0 1-.416.748 6.4 6.4 0 0 1-.585.701c-.216.226-.438.443-.663.65-.113.104-.243.228-.39.37s-.286.29-.416.443c-.13.152-.24.305-.331.461s-.137.3-.137.429h3.458v1.326H9.254a1.027 1.027 0 0 1-.032-.325c.004-.13.007-.22.007-.273 0-.433.08-.832.24-1.196s.363-.7.61-1.007.512-.593.793-.858c.282-.264.547-.518.793-.76.247-.243.451-.477.611-.702.16-.226.24-.456.24-.69 0-.329-.099-.582-.298-.76s-.45-.266-.754-.266c-.251 0-.516.06-.793.182-.277.12-.55.325-.82.61L9.06 5.343a3.254 3.254 0 0 1 1.203-.807 3.82 3.82 0 0 1 1.358-.26c.33 0 .646.048.95.144.302.095.57.238.805.428.234.191.42.432.559.722.138.29.208.627.208 1.007z"/>
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
