import Form from "../../formUnits/FormUnits";
import FormCars from "./TitleCars";

const Cars = () => {
  return (
    <>
      <FormCars />
      <Form {...{ title: "car" }} />
    </>
  );
};

export default Cars;
