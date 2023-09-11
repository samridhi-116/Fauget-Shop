import React from "react";
import { ShimmerSimpleGallery, ShimmerContentBlock, ShimmerCategoryList    } from "react-shimmer-effects-18";

export const Shimmer=()=>{
    return (
      <div className="w-full">
        <div className=" w-11/12 mx-auto mt-8">  
          <ShimmerSimpleGallery card imageHeight={200} caption col={4} row={4} gap={20} />
        </div>
      </div>
    )
}

export const Shimmer2 = () => {
    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto mt-8">
                <ShimmerContentBlock
                    title
                    text
                    cta
                    thumbnailWidth={370}
                    thumbnailHeight={370}
                />
            </div>
        </div>
        
      );
}

export const Shimmer3 = () => {
    return (
        <div className="w-full">
            <div className=" w-11/12 mx-auto mt-8">
                <ShimmerCategoryList title items={6} categoryStyle="STYLE_FOUR" />;
            </div>
            
        </div>
        
      );
}
