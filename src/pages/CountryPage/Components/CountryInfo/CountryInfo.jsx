import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BorderList from '../BorderList/BorderList';
import { getCountryDetail } from '../../../../store/countries/selectors';
import { fetchCountryDetailAction } from '../../../../store/apiActions';
import {Wrapper, Image, Content, WrapperList, InfoList, InfoListItem} from './styles';

const CountryInfo = () => {
    const { name } = useParams();
    const country = useSelector(getCountryDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryDetailAction(name));
    }, [name, dispatch]);

    return (country &&
        <Wrapper>
            <Image src={country.flags.svg} />
            <Content>
                <WrapperList>
                    <InfoList>
                        <InfoListItem>Nativa Name: {country.name}</InfoListItem>
                        <InfoListItem>Population: {country.population}</InfoListItem>
                        <InfoListItem>Region: {country.region}</InfoListItem>
                        <InfoListItem>Sub Region: {country.subregion}</InfoListItem>
                        <InfoListItem>Capital: {country.capital}</InfoListItem>
                    </InfoList>
                    <InfoList>
                        <InfoListItem>Top Laval Domain: {country.topLevelDomain}</InfoListItem>
                        <InfoListItem>Currencies: {}</InfoListItem>
                        <InfoListItem>Languages: {}</InfoListItem>
                    </InfoList>
                </WrapperList>
                <InfoList>
                    <InfoListItem>
                        Border Countries:
                        <BorderList borders={country.borders}></BorderList>
                    </InfoListItem>
                </InfoList>
            </Content>
        </Wrapper>
    );
};

export default CountryInfo;
