// Import React and Next.js components
import React from 'react'
import styles from './styles.module.css';

// Define a custom component for displaying the pagination
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Define a function to generate an array of page numbers
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      {/* Render a button for each page number */}
      {getPages().map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : styles.inactive}
          onClick={() => onPageChange(page)} // Call the onPageChange function with the page number as argument
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination;
