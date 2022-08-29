import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';


function App() {
  

  return (
    <div id="portifolio">
      <h1>Marcos Vítor</h1>
      <Sidebar>SideBar</Sidebar>
      <MainContent>MainContent</MainContent>
    </div>
  );
}

export default App
