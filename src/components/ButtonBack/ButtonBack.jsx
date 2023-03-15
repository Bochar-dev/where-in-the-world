import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { PREV_PAGE } from '../../const';
import { Button } from './styles/';


const ButtonBack = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(PREV_PAGE)}>
            <IoArrowBack size="14px" />
            Back
        </Button>
    );
};

export default ButtonBack;
