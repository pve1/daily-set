import React from 'react';
import Figure from './Figure';

export default {
  title: 'Figure - Diamond',
  component: Figure,
};

const Svg = ({ children }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 50 90"
    width={50 * 1}
    height={90 * 1}
  >
    {children}
  </svg>
);

export const Hollow = () => (
  <Svg>
    <Figure shape="diamond" type="hollow" />
  </Svg>
);

export const Solid = () => (
  <Svg>
    <Figure shape="diamond" type="solid" />
  </Svg>
);

export const Striped = () => (
  <Svg>
    <Figure shape="diamond" type="striped" />
  </Svg>
);

export const Two = () => (
  <>
    <Svg>
      <Figure shape="diamond" type="hollow" />
    </Svg>
    <Svg>
      <Figure shape="diamond" type="hollow" />
    </Svg>
  </>
);
export const Three = () => (
  <>
    <Svg>
      <Figure shape="diamond" type="hollow" color="green" />
    </Svg>
    <Svg>
      <Figure shape="diamond" type="solid" color="purple" />
    </Svg>
    <Svg>
      <Figure shape="diamond" type="striped" color="red" />
    </Svg>
  </>
);