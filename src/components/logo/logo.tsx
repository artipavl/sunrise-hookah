import React, { FC } from 'react';

import Logoimg from '../../images/sunrise-hookah.jpg';
import { LogoImg } from './logo.style';
type LogoProps = {};

const Logo: FC<LogoProps> = props => {
  return (
    <div>
      <LogoImg src={Logoimg} alt="Logo" width="40px" />
    </div>
  );
};

export default Logo;
