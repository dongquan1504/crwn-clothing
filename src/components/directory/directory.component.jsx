import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import hatsIntroImg from "../../assets/image/hatsIntro.jpg";
import jacket from "../../assets/image/jacket.jpeg";
import sneaker from "../../assets/image/sneaker.jpg";
import women from "../../assets/image/women.jpg";
import men from "../../assets/image/men.jpg";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "HATs",
          imageUrl: hatsIntroImg,
          linkUrl: 'hats',
          id: 1,
        },
        {
          title: "JACKETs",
          imageUrl: jacket,
          linkUrl: 'jackets',
          id: 2,
        },
        {
          title: "SNEAKERs",
          imageUrl: sneaker,
          linkUrl: 'sneakers',
          id: 3,
        },
        {
          title: "WOMENs",
          imageUrl: women,
          size: "large",
          linkUrl: 'women',
          id: 4,
        },
        {
          title: "MENs",
          imageUrl: men,
          size: "large",
          linkUrl: 'mens',
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
