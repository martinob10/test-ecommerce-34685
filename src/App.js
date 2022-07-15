import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Modal from './components/Modal/Modal';

function App() {
  return (
    //JSX
    <div className="container" >
      <NavBar />
      <section className='main-container'>
        <ItemListContainer section="Productos en oferta"/>
        {/* <ItemListContainer section="Productos de temporada"/>
        <ItemListContainer section="Productos mas comprados"/> */}
      </section>
      {/* <Modal title="MODAL DE REGISTRO">
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>enviar</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default App;
