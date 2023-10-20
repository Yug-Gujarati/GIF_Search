import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from 'react';
import ResultView from '../components/ResultView';
import { search } from '../helpers/core';
import styles from './styles.module.css';



const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); 

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setLoading(true); // Set the loading status to true before fetching the data
    const response: any = await search(searchTerm);
    setSearchResults(response.data);
    setLoading(false); // Set the loading status to false after fetching the data
  };

  return (
    <div>
      <Head>
        <title>Giphy Search</title>
        <meta name="description" content="Gif Search" />
      </Head>

      <main className=" text-center">
        {/* <h1 className="text-4xl m-16 mb-2">Yug GIF search app</h1> */}
        <div className="p-5 border-black">
          <form onSubmit={handleSubmit}>
            <input
              className={styles['search-bar']}
              type="search"
              onChange={handleChange}
              value={searchTerm}
              placeholder="Search GIFs"
            />
            <button className={styles['search-bar-button']} type="submit">
              Search
              {/* {' '}
              Search{' '} */}
            </button> 
          </form>
          </div>
        {/* Add a conditional rendering for the loader and the result view based on the loading status */}
        {loading ? (
          // Render a loader element with some animation style
          <div className={styles.loader}>
            .lodding
          </div>
        ) : (
          // Render the result view component with the search results as props
          <ResultView giphys={searchResults} />
        )}
      </main>
    </div>
  );
};

export default Home;

