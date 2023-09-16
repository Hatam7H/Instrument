import './App.css';
import { Navbar } from './components';
import { Header, Intro, Who, Carrers, Companies, Footers} from './container'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Who />
      <Carrers />
      <Companies />
      <Footers />
    </div>
  );
}

export default App;
