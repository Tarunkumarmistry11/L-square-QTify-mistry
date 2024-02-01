import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import styles from "./yourStyles.module.css"; // Make sure to replace with the correct import for your styles

function Card({ data, type }) {
  const getCard = () => {
    switch (type) {
      case "album": {
        const { likes, image, title, follows, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="song" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                    <div className={styles.pill}>
                      <p>{likes} Likes</p>
                    </div>
                    <div className={styles.titleWrapper}>
                      <p>{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Tooltip>
        );
      }
      case "song": {
        const { likes, image, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
            </div>
            <div className={styles.pill}>
              <p>{likes} Likes</p>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return getCard();
}

export default Card;
