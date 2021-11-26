import Form from "../../formUnits/FormUnits";
import FormCars from "./TitleCars";

const Cars = () => {

  return(
    <>
      <FormCars/>
      <Form {...{title: "car", status: "car-status"}}/>
    </>
  )
};

export default Cars;
