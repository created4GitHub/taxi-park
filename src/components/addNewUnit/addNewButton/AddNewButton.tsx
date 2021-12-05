import { useDispatch } from "react-redux";

import addObj from "../../../img/addObj.svg";
import deleteObj from "../../../img/deleteObj.svg";
import { Button } from "../../regularComponents/button/Button";

interface Button {
  onClick: () => void;
  src: string;
}

interface Props {
  checkForm: () => void;
  closeAddNewUnit: () => {
    type: string;
  };
}

export default function AddNewButton({ checkForm, closeAddNewUnit }: Props) {
  const dispatch = useDispatch();
  const buttons: Button[] = [
    {
      onClick: () => checkForm(),
      src: addObj,
    },
    {
      onClick: () => dispatch(closeAddNewUnit()),
      src: deleteObj,
    },
  ];
  return (
    <div className="table_section_buttons">
      {buttons.map((item: Button, index: number) => (
        <Button
          key={index}
          onClick={item.onClick}
          className="table_section-button"
          btnText={<img src={item.src} alt="alt" />}
        />
      ))}
    </div>
  );
}
