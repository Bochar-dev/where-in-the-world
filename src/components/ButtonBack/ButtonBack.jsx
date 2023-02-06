import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { PREV_PAGE } from '../../const';
import { ButtonBackElement} from './ButtonBackElement';


const ButtonBack = () => {
    const navigate = useNavigate();

    return (
        <ButtonBackElement onClick={() => navigate(PREV_PAGE)}>
            <IoArrowBack size="14px" />
            Back
        </ButtonBackElement>
    );
};

export default ButtonBack;
