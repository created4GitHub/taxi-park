import Form from "../form/Form";
import FormCars from "../titles/TitleCars";

const Cars = () => {

  return(
    <>
      <FormCars/>
      <Form {...{title: "car", status: "car-status"}}/>
    </>
  )
};

export default Cars;