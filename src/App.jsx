import {useEffect, useState} from 'react';
import './App.css'
import { Dnd } from './components/Dnd';
import {InputWithLabel} from './components/InputWithLabel';
import { List } from './components/List';
import { Search } from './components/Search';
import { useStorageState } from './hooks/useStorageState';

const title = "Hello React";
const list = [
  {
    title: "React",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Angular",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export const App = () => {

  const [searchTerm, setSearchTerm] = useStorageState('search', 'react');
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAsyncStories = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 2000);
    })
  }

  useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then(results => {
        setStories(results);
      })
      .finally(() => setIsLoading(false))
  }, []);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    // Side effect, we can handle the side effects using useEffect
    // localStorage.setItem("searchTerm", event.target.value);
  }


  const deleteStory = (id) => {
    setStories(stories.filter((story) => story.objectID !== id));
  }

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <h1>{title}</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <br />
      <br />
      {/* <InputWithLabel id="input-with-label" label="Search : " /> */}

      <hr />
      {
        isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <List list={searchedStories} deleteHandler={deleteStory} />
      )}

      {/* <Dnd /> */}
    </>
  );
}

export default App
