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
    width={380}
    height={490}
    viewBox="0 0 400 500"
    backgroundColor="#a2a0a0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="35" cy="470" r="31" />
    <rect x="3" y="7" rx="8" ry="8" width="188" height="18" />
    <rect x="290" y="5" rx="8" ry="8" width="100" height="18" />
    <rect x="3" y="35" rx="5" ry="7" width="393" height="400" />
    <rect x="72" y="445" rx="8" ry="8" width="120" height="12" />
    <rect x="72" y="465" rx="8" ry="8" width="320" height="12" />
    <rect x="72" y="485" rx="8" ry="8" width="320" height="12" />
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
