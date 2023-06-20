import React from 'react';
import { usePodcasts } from '../../hooks/usePodcasts';
import Podcast from '../Podcast/Podcast';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import { useSearch } from '../../hooks/useSearch';

function Home() {
  const { data } = usePodcasts();
  // const [query, setQuery] = useState('');
  // const [podcasts, setPodcasts] = useState(data);
  const { query, podcasts, handleChange } = useSearch(data);
  const hasPodcasts = podcasts?.length > 0;

  // useEffect(() => {
  //   if (data) {
  //     setPodcasts(data.feed.entry);
  //   }
  // }, [data]);

  // function search(listOfPodcasts, queryNice) {
  //   return listOfPodcasts.feed.entry.filter((el) => {
  //     const name = el['im:name'].label.toLowerCase();
  //     const author = el['im:artist'].label.toLowerCase();
  //     return name.includes(queryNice) || author.includes(queryNice);
  //   });
  // }

  // function handleChange(e) {
  //   const newQuery = e.target.value.toLowerCase();
  //   if (newQuery.startsWith(' ')) return;
  //   setQuery(newQuery);

  //   if (newQuery === '') {
  //     setPodcasts(data.feed.entry);
  //   } else {
  //     const filteredPodcasts = search(data, newQuery);
  //     setPodcasts(filteredPodcasts);
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="search-bar">
          {podcasts?.length}
        </label>
        <input
          value={query}
          className="search-input"
          type="text"
          name="query"
          id="search-bar"
          placeholder="Filter Podcasts..."
          onChange={handleChange}
        />
      </form> */}

      <SearchBar
        query={query}
        podcasts={podcasts}
        handleChange={handleChange}
      />
      <ul className="podcasts_list">
        {hasPodcasts
          ? podcasts
            .map((podcast) => <Podcast key={podcast.id.attributes['im:id']} podcast={podcast} />)
          : null}
      </ul>
    </>
  );
}

export default Home;
