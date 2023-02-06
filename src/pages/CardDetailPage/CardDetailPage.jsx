import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetailAction } from '../../store/apiActions';
import { getCountryDetail, getErrorMessage, getStatus } from '../../store/countries/selectors';
import { Status } from '../../const';
import Spinner from '../../components/Spinner/Spinner';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import CountryDetail from '../../components/CountryDetail/CountryDetail';

const CardDetailPage = () => {
    const { name } = useParams();

    const countryDetail = useSelector(getCountryDetail);
    const status = useSelector(getStatus);
    const errorMessage = useSelector(getErrorMessage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryDetailAction(name));
    }, [name, dispatch]);

    return (
        <>
            <ButtonBack />

            {status === Status.Pending && <Spinner />}
            {status === Status.Rejected && errorMessage}
            {countryDetail && <CountryDetail {...countryDetail} />}
        </>
    );
};

export default CardDetailPage;
