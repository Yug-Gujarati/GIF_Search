// Import React and Next.js components
import React, { useState } from 'react'
import { Giphy } from '../helpers/core';
import styles from '../pages/styles.module.css';

// Define a custom component for displaying the result of GIFs
const ResultView = ({ giphys }: { giphys: Giphy[] }) => {
  // Define a state variable for the favorite GIFs
  const [favorites, setFavorites] = useState<Giphy[]>([]); // Initialize with an empty array

  // Define a function to handle the star button click event
  const handleStarClick = (gif: Giphy) => {
    // Check if the GIF is already in the favorites array
    const isFavorite = favorites.some((f) => f.id === gif.id);

    if (isFavorite) {
      // If it's a favorite, remove it from the array
      setFavorites(favorites.filter((f) => f.id !== gif.id));
    } else {
      // If it's not a favorite, add it to the array
      setFavorites([...favorites, gif]);
    }
  };


  return (
    <div className="grid grid-cols-3 gap-4">
      {giphys.map((each, index) => {
        return (
          <div key={index} className="text-center">
            {/* Move the image container to the top of the div */}
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={each.images.original.url}
                alt={each.title}
              />
            </div>
            {/* Add a flex container for the star button and the title */}
            <div className={styles.flexContainer}>
              {/* Add a star button with a conditional style based on the favorite state */}
              <button className={styles.star} onClick={() => handleStarClick(each)} style={{color: favorites.includes(each) ? 'gold' : 'black'}}>
                  {favorites.includes(each) ? '★' : '☆'}
              </button>
              {/* Add a title with some margin-left */}
              <h1 className={styles.title} style={{fontWeight: 'bold', fontSize: '1rem'}}>{each.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ResultView;
