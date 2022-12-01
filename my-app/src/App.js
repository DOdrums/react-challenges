import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPIHooks from './components/ContentAPIHooks';
// import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm/>
      <Sidebar/>
      <ContentAPIHooks/>
      {/* <NavBarSimple/> */}
    </div>
  );
}

export default App;