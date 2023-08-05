
import AddTags from './AddTags';
import './App.css';
import DeleteMultiple from './DeleteMultiple';
import ExampleFunctional from './ExampleFunctional';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      {/* <DeleteMultiple /> */}
      <ExampleFunctional />
      <AddTags />
      <Footer />
    </div>
  );
}

export default App;
