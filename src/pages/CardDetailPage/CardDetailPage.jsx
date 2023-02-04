import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import CountryDetail from '../../components/CountryDetail/CountryDetail';
import { fetchCountryDetailAction } from '../../store/apiActions';
import { getCountryDetail } from '../../store/countries/selectors';

const CardDetailPage = () => {
    const { name } = useParams();
    const countryDetail = useSelector(getCountryDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('name', name);
        dispatch(fetchCountryDetailAction(name));
    }, [name, dispatch]);

    const cardInfo = {
        img: countryDetail.flags.png,
        name: countryDetail.name,
        info: [
            {
                title: 'Native Name',
                description: countryDetail.nativeName,
            },
            {
                title: 'Population',
                description: countryDetail.population,
            },
            {
                title: 'Region',
                description: countryDetail.region,
            },
            {
                title: 'Sub Region',
                description: countryDetail.subregion,
            },
            {
                title: 'Capital',
                description: countryDetail.capital,
            },
            {
                title: 'Top level Domain',
                description: countryDetail.topLevelDomain,
            },
            {
                title: 'Currencies',
                description: countryDetail.currencies,
            },
            {
                title: 'Languages',
                description: countryDetail.languages,
            },
        ],
        secondInfo: {
            title: 'Border Countries',
            links: countryDetail.borders,
        }
    };

    return (
        <>
            <ButtonBack />
            <CountryDetail {...cardInfo}/>
        </>
    );
};

export default CardDetailPage;