import Form from "../form/Form";
import FormDrivers from "../titles/Titles";

const Drivers = () => {

  return(
    <>
      <FormDrivers />
      <Form {...{title: "driver", status: "driver-status"}}/>
    </>
  ) 
};

export default Drivers;
