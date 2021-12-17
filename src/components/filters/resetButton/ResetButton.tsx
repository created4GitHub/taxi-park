import { FormattedMessage } from "react-intl";
import styled from 'styled-components';
import { LIGHT_ORANGE_COLOR, ORANGE_COLOR } from "../../../constants/style.colors";

const Button = styled.button`
    width: 200px;
    height: 35px;
    border-radius: 8px;
    color: ${ORANGE_COLOR};
    background-color: ${LIGHT_ORANGE_COLOR};
    border: none;
    cursor: pointer;
    @media (max-width: 1080px) {
        height: 100%;
        width: 62px;
    }
    @media (max-width: 445px) {
        width: 300px;
        height: 45px;
    }   
`;

interface Props {
    resetFilters: () => void;
}

const ResetButton = ({ resetFilters }: Props) => {
    return (
        <div className="reset-filter-button">
            <Button type="button" 
                onClick={resetFilters}>
                {<FormattedMessage id='Reset' />}
            </Button>
        </div>
    );
}

export default ResetButton;
