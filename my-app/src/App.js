import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';
// import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm/>
      <Sidebar/>
      <ContentAPI/>
      {/* <NavBarSimple/> */}
    </div>
  );
}

export default App;