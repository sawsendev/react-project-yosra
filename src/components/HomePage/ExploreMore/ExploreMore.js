import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ExploreMoreSmall from './ExploreMoreSmall';
import ExploreMoreLarge from './ExploreMoreLarge';

const ExploreMore= () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {isLargeScreen ? (
        <ExploreMoreLarge/>
      ) : (
        <ExploreMoreSmall />
      )}
    </>
  );
};

export default ExploreMore;
