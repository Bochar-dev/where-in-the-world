import { Wrapper, Imgage, Content, Title, ContentList, ContentItem } from './styles';

const CountriesItem = ({country}) => {

    const {
        capital,
        flags,
        name,
        population,
        region
    } = country;

    return (
        <Wrapper>
            <Imgage src={flags.svg}></Imgage>
            <Content>
                <Title>{name}</Title>
                <ContentList>
                    <ContentItem>Population: {population}</ContentItem>
                    <ContentItem>Region: {region}</ContentItem>
                    <ContentItem>Capital: {capital}</ContentItem>
                </ContentList>
            </Content>
        </Wrapper>
    );
};

export default CountriesItem;
