import Recipes from './Recipes';
import '../styles/index.scss';
import '../styles/app.scss';

const App = () => {
  return (
    <section className="hero">
      <main>
        <section>
          <h1>App!</h1>
          <Recipes />
        </section>
      </main>
    </section>
  );
};

export default App;
