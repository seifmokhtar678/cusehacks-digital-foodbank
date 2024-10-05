// functionallaity over css aesthethics*
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styling/ShopEvs.scss";

const ShopEvs = () => {
  useEffect(() => {
    // api call for make & models
    const testRun = async () => {
      const makeResponse = await fetch("http://localhost:3001/makes");
      const makeData = await makeResponse.json();
      setMakes(makeData.makes);
    };
    testRun();
  });

  const [carDetails, setCarDetails] = useState();
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState();
  const [selectedModel, setSelectedModel] = useState();

  // filters out the make
  const handleMakeSelect = async (event) => {
    const value = event.target.value;
    setSelectedMake(value);

    console.log(value);

    const modelsResponse = await fetch(`http://localhost:3001/models/${value}`);
    const modelsData = await modelsResponse.json();
    setModels(modelsData.models);
  };

  //filters out the model
  const handleModelSelect = async (event) => {
    // const Model = event.target.value;
    // setModel(Model);

    // const filteredCars = cars.filter(
    //   (car) => car.make === Make && car.model === Model
    // );
    const carAPIresponse = await fetch(
      `http://localhost:3001/types/${event.target.value}`
    );
    const carResponse = await carAPIresponse.json();
    setCarDetails(carResponse.types);

    console.log(carResponse.types);
  };

  return (
    // created a selector, need to create useState
    <div id="shopEvs">
      <label htmlFor="make-select">Select a make:</label>
      <select id="make-select" value={selectedMake} onChange={handleMakeSelect}>
        <option value="">Choose a make</option>
        {/* <option value="Tesla">Tesla</option>
        <option value="Ford">Ford</option> */}
        {makes.map((make) => {
          return (
            <option key={make.id} value={make.id}>
              {make.name}
            </option>
          );
        })}
        {/* <option value="Polestar">Polestar</option> */}
      </select>

      <label htmlFor="model-select">Select a model:</label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={handleModelSelect}
      >
        <option value="">Choose a model</option>
        {/* mapping over cars array to return it */}
        {models.map((car) => (
          // set a key to connect cars info
          <option key={car.model} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>

      <table>
        <thead id="EVinfo">
          <tr>
            <th>Make</th>

            <th>Model</th>

            <th>Price</th>

            <th>Range</th>

            <th>Drivetrain</th>
          </tr>
        </thead>

        <tbody id="model-details">
          {carDetails && (
            <tr key={carDetails.id}>
              <td>{carDetails.model.make.name}</td>
              <td>{carDetails.model.name}</td>
              <td>{carDetails.price.toLocaleString()}</td>
              <td>{carDetails.range}</td>
              <td>{carDetails.drivetype}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShopEvs;
