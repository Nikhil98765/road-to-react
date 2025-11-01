import './App.css'
import InputWithLabel from './components/InputWithLabel';
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

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    // Side effect, we can handle the side effects using useEffect
    // localStorage.setItem("searchTerm", event.target.value);
  }

  const searchedStories = list.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <h1>{title}</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <br />
      <br />
      <InputWithLabel id="input-with-label" label="Search : " />

      <hr />

      <List list={searchedStories}/>
    </>
  );
}

export default App
