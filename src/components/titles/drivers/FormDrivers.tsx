import Form from "../../formUnits/FormUnits";
import FormDrivers from "./TitlesDrivers";

const Drivers = () => {

  return(
    <>
      <FormDrivers />
      <Form {...{title: "driver", status: "driver-status"}}/>
    </>
  ) 
}

export default Drivers;
