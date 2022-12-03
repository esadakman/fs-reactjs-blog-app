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
    width={404}
    height={544}
    viewBox="0 0 384 544"
    backgroundColor="#a2a0a0"
    foregroundColor="#ecebeb"
    {...props}
    className="h-480px sm:h-544px max-h-548px 2xl:max-h-full 2xl:h-600px w-11/12 md:w-full rounded-xl p-1 max-w-sm 2xl:max-w-lg md:mx-10 xl:mx-5"
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

const DetailLoader = (props) => (
  <ContentLoader
    speed={2}
    width={608}
    height={1000}
    viewBox="0 0 608 1100"
    backgroundColor="#f3f3f3"
    foregroundColor="#b2aeae"
    {...props}
    className="bg-main py-2 rounded-xl w-11/12 md:w-200 h-fit"
  >
    <rect x="12" y="64" rx="10" ry="10" width="591" height="380" />
    <rect x="148" y="16" rx="10" ry="10" width="312" height="26" />
    <rect x="149" y="470" rx="10" ry="10" width="318" height="20" />
    <rect x="234" y="510" rx="6" ry="6" width="150" height="16" />
    <rect x="12" y="550" rx="10" ry="10" width="591" height="240" />
    <circle cx="46" cy="850" r="32" />
    <rect x="92" y="824" rx="9" ry="9" width="77" height="14" />
    <rect x="440" y="840" rx="9" ry="9" width="160" height="20" />
    <rect x="12" y="900" rx="5" ry="5" width="591" height="51" />
    <rect x="12" y="970" rx="9" ry="9" width="160" height="20" />
    <circle cx="44" cy="1040" r="32" />
    <rect x="90" y="1014" rx="9" ry="9" width="150" height="18" />
    <rect x="90" y="1050" rx="9" ry="9" width="200" height="18" />
  </ContentLoader>
);

export { AvatarLoader, CommentLoader, PostLoader, DetailLoader };

// {/* <ContentLoader
//     speed={2}
//     width={608}
//     height={1000}
//     viewBox="0 0 608 1100"
//     backgroundColor="#f3f3f3"
//     foregroundColor="#b2aeae"
//     {...props}
//     className="bg-main py-2 rounded-xl w-11/12 md:w-200 h-fit"
//   >
//     <rect x="12" y="44" rx="10" ry="10" width="591" height="370" />
//     <rect x="148" y="5" rx="10" ry="10" width="312" height="26" />
//     <rect x="152" y="430" rx="10" ry="10" width="312" height="20" />
//     <rect x="234" y="460" rx="6" ry="6" width="150" height="16" />
//     <rect x="12" y="490" rx="10" ry="10" width="591" height="222" />
//     <circle cx="46" cy="760" r="32" />
//     <rect x="92" y="740" rx="9" ry="9" width="77" height="14" />
//     <rect x="440" y="755" rx="9" ry="9" width="160" height="18" />
//     <rect x="12" y="805" rx="5" ry="5" width="591" height="51" />
//     <rect x="12" y="870" rx="9" ry="9" width="160" height="20" />
//     <circle cx="44" cy="942" r="32" />
//     <rect x="90" y="918" rx="9" ry="9" width="150" height="18" />
//     <rect x="90" y="948" rx="9" ry="9" width="200" height="18" />
//   </ContentLoader> */}
