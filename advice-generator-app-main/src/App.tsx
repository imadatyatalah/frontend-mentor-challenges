import Card from "./components/Card";

const App = () => {
  return (
    <section
      role="main"
      className="flex items-center justify-center min-h-screen font-manrope"
    >
      <h1 className="sr-only">Advice Generator</h1>

      <Card />
    </section>
  );
};

export default App;
