import { Wrapper, WrapperInner, Image, Content, Title, ContentList, ContentItem } from './styles';

const CountriesItem = ({ country }) => {
    return (
        <Wrapper>
            <WrapperInner to={`/country/${country.name}`}>
                <Image src={country.flags.svg} />
                <Content>
                    <Title>{country.name}</Title>
                    <ContentList>
                        <ContentItem>
                            Population: {country.population}
                        </ContentItem>
                        <ContentItem>
                            Region: {country.region}
                        </ContentItem>
                        <ContentItem>
                            Capital: {country.capital}
                        </ContentItem>
                    </ContentList>
                </Content>
            </WrapperInner>
        </Wrapper>
    );
};

export default CountriesItem;
