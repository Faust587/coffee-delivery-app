import React from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  color: string;
  size: number;
};

export const FavoritesIcon = ({color, size}: TProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.1719 2.88848C23.1389 -0.760645 17.6913 -0.95179 14.4055 2.31347C11.1198 -0.95179 5.67211 -0.760645 2.64069 2.88848C-0.00285697 6.07002 0.472442 10.8076 3.40689 13.7237L13.2817 23.5369C13.9032 24.1545 14.9094 24.1545 15.5294 23.5369L25.4042 13.7237C28.3402 10.8076 28.8155 6.07002 26.1719 2.88848Z"
        fill={color}
      />
    </Svg>
  );
};
