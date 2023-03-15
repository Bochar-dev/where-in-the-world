import { Wrapper, WrapperInner, Image, Content, Title, ContentList, ContentItem } from './styles';

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
            <WrapperInner to={`/country/${name}`}>
                <Image src={flags.svg} />
                <Content>
                    <Title>{name}</Title>
                    <ContentList>
                        <ContentItem>Population: {population}</ContentItem>
                        <ContentItem>Region: {region}</ContentItem>
                        <ContentItem>Capital: {capital}</ContentItem>
                    </ContentList>
                </Content>
            </WrapperInner>
        </Wrapper>
    );
};

export default CountriesItem;
