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

const PostLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={384}
    height={544}
    viewBox="0 0 384 544"
    backgroundColor="#a2a0a0"
    foregroundColor="#ecebeb"
    {...props}
    className="sm:max-h-full max-h-480px w-11/12 max-w-sm 2xl:max-w-lg"
  > 
    <rect x="255" y="5" rx="10" ry="10" width="120" height="18" /> 
    <rect x="4" y="5" rx="10" ry="10" width="140" height="18" /> 
    <rect x="5" y="40" rx="10" ry="10" width="374" height="410" /> 
    <circle cx="45" cy="500" r="32" /> 
    <rect x="87" y="460" rx="10" ry="10" width="120" height="15" /> 
    <rect x="87" y="490" rx="10" ry="10" width="290" height="15" /> 
    <rect x="87" y="520" rx="10" ry="10" width="290" height="15" />
  </ContentLoader>
);

// export default PostLoader;

const CommentLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={60}
    viewBox="0 0 400 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="64" y="30" rx="10" ry="10" width="188" height="14" />
    <rect x="64" y="8" rx="10" ry="10" width="100" height="14" />
    <circle cx="24" cy="26" r="24" />
  </ContentLoader>
);

export { AvatarLoader, CommentLoader, PostLoader };
