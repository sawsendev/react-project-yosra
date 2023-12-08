import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ExploreMoreSmall from './ExploreMoreSmall';
import ExploreMoreLarge from './ExploreMoreLarge';

const ExploreMore= ({lotData}) => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {isLargeScreen ? (
        <ExploreMoreLarge lotData={lotData}/>
      ) : (
        <ExploreMoreSmall lotData={lotData}/>
      )}
    </>
  );
};

export default ExploreMore;
