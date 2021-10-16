import hatsIntroImg from "../../assets/image/hatsIntro.jpg";
import jacket from "../../assets/image/jacket.jpeg";
import sneaker from "../../assets/image/sneaker.jpg";
import women from "../../assets/image/women.jpg";
import men from "../../assets/image/men.jpg";
const INTIAL_STATE = {
  sections: [
    {
      title: "HATs",
      imageUrl: hatsIntroImg,
      linkUrl: "shop/hats",
      id: 1,
    },
    {
      title: "JACKETs",
      imageUrl: jacket,
      linkUrl: "shop/jackets",
      id: 2,
    },
    {
      title: "SNEAKERs",
      imageUrl: sneaker,
      linkUrl: "shop/sneakers",
      id: 3,
    },
    {
      title: "WOMENs",
      imageUrl: women,
      size: "large",
      linkUrl: "shop/womens",
      id: 4,
    },
    {
      title: "MENs",
      imageUrl: men,
      size: "large",
      linkUrl: "shop/mens",
      id: 5,
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
