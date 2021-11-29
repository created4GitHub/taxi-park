import React, { useEffect, useState, ChangeEventHandler } from "react";

import { Button } from "../regularComponents/button/Button";

import { GET } from "../../requests";

import { Info } from "../../interfaces";

import "./findDriverId.style.scss";

type Props = {
  maxLength?: number;
  name?: string;
  onChange: (id: string) => number;
};

const FindDriverId: React.FC<Props> = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [users, setUsers] = useState(new Array<Info>());
  const [result, setResult] = useState<string>("");
  const [nameBut, setNameBut] = useState<string>("user");

  useEffect(() => {
    GET("driver").then((data) => {
      setUsers(data.data as Info[]);
    });
  }, []);

  const renderDrivers = () => {
    return users.map((item: Info, index: number) => {
      return (
        <Button
          id={item.id}
          className="search__findDriber-button"
          key={index}
          btnText={
            <>
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
            </>
          }
        />
      );
    });
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (event.relatedTarget !== null && event.relatedTarget.id) {
      setNameBut(event.relatedTarget.id);
      setResult(event.relatedTarget.id);
    }

    setIsActive((prevState: boolean) => !prevState);
  };
  props.onChange(result);

  return (
    <div className="search__findDriber">
      <Button
        className="data_year-button"
        onClick={() => setIsActive((prevState: boolean) => !prevState)}
        onBlur={onBlurEvent}
        btnText={"id driver - " + nameBut}
      />
      {isActive ? (
        <div className="search__findDriber_cartsDriver">{renderDrivers()}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FindDriverId;
