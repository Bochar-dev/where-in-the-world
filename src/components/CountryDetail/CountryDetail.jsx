import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBorderCountries } from '../../store/countries/selectors';
import { fetchCountriesCodeAction } from '../../store/apiActions';
import { printArrInfoDetail } from '../../utils';
import CountryDetailList from '../CountryDetailList/CountryDetailList';
import ListTitle from '../ListTitle/ListTitle';
import { Inner } from './Innder';
import { Wrapper } from './Wrapper';
import { CardDetailImage } from './CardDetailImage';
import { CardDetailTitle } from './CardDetailTitle';
import { CardDetailListGroup } from './CardDetailListGroup';
import { CardDetailBottom } from './CardDetailBottom';
import { CardDetailLinks } from './CardDetailLinks';
import { CardDetailLinksItem } from './CardDetailLinksItem';
import { CardDetailContent } from './CardDetailContent';

const CountryDetail = (props) => {
    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain = [],
        currencies = [],
        languages = [],
        borders = [],
    } = props;

    const borderCountries = useSelector(getBorderCountries);
    const dispatch = useDispatch();

    useEffect(() => {
        if (borders.length) {
            const codes = borders.join(',');

            dispatch(fetchCountriesCodeAction(codes));
        }
    }, [borders, dispatch]);

    const infoList = [
        {
            title: 'Nativa Name',
            description: nativeName,
        },
        {
            title: 'Population',
            description: population,
        },
        {
            title: 'Region',
            description: region,
        },
        {
            title: 'Sub Region',
            description: subregion,
        },
        {
            title: 'Capital',
            description: capital,
        },
    ];

    const infoListSecond = [
        {
            title: 'Top Laval Domain',
            description: printArrInfoDetail(topLevelDomain),
        },
        {
            title: 'Currencies',
            description: printArrInfoDetail(currencies, 'code'),
        },
        {
            title: 'Languages',
            description: printArrInfoDetail(languages, 'name'),
        },
    ];

    return (
        <Wrapper>
            <Inner>
                <CardDetailImage src={flag}/>
                <CardDetailContent>
                    <CardDetailTitle>{name}</CardDetailTitle>
                    <CardDetailListGroup>
                        <CountryDetailList list={infoList}/>
                        <CountryDetailList list={infoListSecond}/>
                    </CardDetailListGroup>
                    {borders.length !== 0 &&
                        <CardDetailBottom>
                            <ListTitle>Border Countries: </ListTitle>
                            <CardDetailLinks>
                                {borderCountries.map((country) => (
                                    <CardDetailLinksItem key={country.name} to={'/country/' + country.name}>
                                        {country.name}
                                    </CardDetailLinksItem>
                                ))}
                            </CardDetailLinks>
                        </CardDetailBottom>}
                </CardDetailContent>
            </Inner>
        </Wrapper>
    );
};

export default CountryDetail;
