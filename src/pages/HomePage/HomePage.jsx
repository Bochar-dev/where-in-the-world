import {useSelector} from 'react-redux';
import { Status } from '../../const';
import Controlls from '../../components/Controlls/Controlls';
import CountryList from '../../components/CountryList/CountryList';
import CountryCard from '../../components/CountryCard/CountryCard';
import { getStatus, getFilteredCountries } from '../../store/countries/selectors';
import Spinner from '../../components/Spinner/Spinner';

const HomePage = () => {
    const countries = useSelector(getFilteredCountries);
    const status = useSelector(getStatus);

    return (
        <>
            <Controlls />
            {status === Status.Pending ? <Spinner /> : null}
            {status === Status.Fulfilled ?
                <CountryList>
                    {countries.map((country) => {
                        const countryInfo = {
                            link: country.name,
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: country.population
                                },
                                {
                                    title: 'Region',
                                    description: country.region
                                },
                                {
                                    title: 'Capital',
                                    description: country.capital
                                },
                            ],
                        };

                        return <CountryCard key={country.name} {...countryInfo}/>;
                    })}
                </CountryList> : null}
        </>
    );
};

export default HomePage;