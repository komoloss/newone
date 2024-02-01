import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelecteItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelecctItem={handleSelecteItem}
      />
    </div>
  );
}

export default App;
