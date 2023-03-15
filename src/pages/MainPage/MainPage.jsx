// import {useSelector} from 'react-redux';
// import { Status } from '../../const';
// import CountryList from '../../components/CountryList/CountryList';
// import CountryCard from '../../components/CountryCard/CountryCard';
// import { getStatus, getFilteredCountries, getErrorMessage } from '../../store/countries/selectors';
// import Spinner from '../../components/Spinner/Spinner';
import Controls from './components/Controls/Controls';
import CountriesList from './components/CountriesList/CountriesList';

const HomePage = () => {
    // const countries = useSelector(getFilteredCountries);
    // const status = useSelector(getStatus);
    // const errorNessage = useSelector(getErrorMessage);

    return (
        <>
            <Controls />
            <CountriesList />
            {/* {status === Status.Pending && <Spinner />}
            {status === Status.Rejected && errorNessage}
            {status === Status.Fulfilled &&
                <CountryList>
                    {!countries.length && 'No such country exists!'}
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

                        return <CountryCard key={country.name} {...countryInfo} />;
                    })}
                </CountryList>
            } */}
        </>
    );
};

export default HomePage;
