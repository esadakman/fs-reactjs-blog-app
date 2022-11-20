import React from "react";
import ContentLoader from "react-content-loader";

const AvatarLoader = (props) => (
  <ContentLoader
    speed={2}
    width={40}
    height={40}
    viewBox="0 0 55 55"
    backgroundColor="#333"
    foregroundColor="#444"
    {...props}
  >
    <circle cx="24" cy="24" r="24" />
  </ContentLoader>
);

export { AvatarLoader };


const PostLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#a2a0a0"
      foregroundColor="#ecebeb"
      {...props}
      style={{borderRadius:'15px'}}  
    > 
      <rect x="0" y="0" rx="10" ry="10"  width="500" height="500" />   
    </ContentLoader>
  )
  
  export default PostLoader
