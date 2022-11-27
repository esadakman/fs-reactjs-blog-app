import profileDefault from "../assets/images/default.webp";
import postDefault from "../assets/images/not-found.png";

export const onImageError = (e) => {
  e.target.src = profileDefault;
};
export const onImageErrorPost = (e) => {
  e.target.src = postDefault;
};
export const smoothScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let myKey = window.atob(localStorage.getItem("token"));

export const config = {
  method: "post",
  headers: {
    Authorization: `Token ${myKey}`,
  },
};
