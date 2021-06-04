import React from "react";
import "./styles/directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "HATS",
          image: "https://picsum.photos/500/500?random=24",
          id: 1,
        },
        {
          title: "JACKETS",
          image: "https://picsum.photos/500/500?random=22",
          id: 2,
        },
        {
          title: "SNEAKERS",
          image: "https://picsum.photos/500/500?random=23",
          id: 3,
        },
        {
          title: "WOMENS",
          image: "https://picsum.photos/500/500?random=21",
          size: "large",
          id: 4,
        },
        {
          title: "MENS",
          image: "https://picsum.photos/500/500?random=4",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            img={section.image}
            size={section.size}
          ></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
