import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";

const Terms = () => {
  return (
    <div className="container">
      <h1 className="bigTerm">TERMS</h1>
      <p>
        <strong>Battery:</strong> Electrochemical cells electrically connected
        in a series and/or parallel arrangement.
      </p>
      <p>
        <strong>Battery pack:</strong> A group of battery cells or modules
        connected in serial or parallel arrangement, fully configured as a unit
        meeting the voltage and packaging requirements of a vehicle.
      </p>
      <p>
        <strong>Battery system:</strong> A completely functional complex battery
        which includes the battery pack and battery support equipment, such as
        thermal management and battery controls.
      </p>
      <p>
        <strong>Capacity:</strong> The total number of ampere hours (Ah) that
        can be withdrawn from a fully charged cell or battery for a specific set
        of operating conditions, including discharge rate, temperature, age,
        stand time, and discharge termination criteria.
      </p>
      <p>
        <strong>Charge (verb):</strong> Conversion of electrical energy into
        chemical potential energy within a cell by the passage of a direct
        current.
      </p>
      <p>
        <strong>Charge (noun):</strong> Coulombs or ampere-hours of energy
        available in a cell or battery.
      </p>
      <p>
        <strong>Charge coupling:</strong> A take-apart transformer for inductive
        charging operating between 80kHz and 300kHz, composed of two primary
        components—the vehicle inlet and the coupler.
      </p>
      <p>
        <strong>Charger:</strong> An electrical device that converts alternating
        current energy to a regulated direct current voltage for replenishing
        the energy of an energy storage device (i.e., battery) and operating
        other vehicle electrical systems.
      </p>
      <p>
        <strong>Conductive coupling:</strong> A recharge cord and plug that
        physically connect to the vehicle circuit (see inductive coupling).
      </p>
      <p>
        <strong>Connector:</strong> A conductive or inductive device that, by
        insertion into an inlet on the electric vehicle, establishes connection
        to an electric vehicle for the purpose of energy transfer and
        information exchange. It is part of a coupling (a mating vehicle inlet
        and connector set).
      </p>
      <p>
        <strong>Controller:</strong> A solid-state device that regulates the
        amount of power delivered to an EV's traction motor.
      </p>
      <p>
        <strong>Coupler:</strong> The device connected to the electric vehicle
        supply equipment that transfers power to the electric vehicle for
        charging the energy storage system and permits the exchange of
        information between the EV and the EV's supply equipment. The coupler
        contains the primary coil of the take-apart transformer, an antenna for
        communications, a magnet for connection check, and provisions for
        locking the coupler in the vehicle to prevent tampering.
      </p>
      <p>
        <strong>Coupling:</strong> A mating vehicle inlet and connector set.
      </p>
      <div className="sourceCenter">
        <strong>SOURCE: &copy;www.pge.com</strong>
      </div>
    </div>
  );
};

export default Terms;
