import { Wrapper } from './Wrapper';
import { CardLink } from './CardLink';
import { CardImage } from './CardImage';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';
import { CardList } from './CardList';
import { CardListItem } from './CardListItem';
import { CardListItemTitle } from './CardListItemTitle';

const CountryCard = (props) => {
    const {
        link,
        img,
        name,
        info = [],
    } = props;

    return (
        <Wrapper>
            <CardLink to={'country/' + link}>
                <CardImage src={img}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardList>
                        {info.map((element) => (
                            <CardListItem key={element.title}>
                                <CardListItemTitle>{element.title}:</CardListItemTitle> {element.description}
                            </CardListItem>
                        ))}
                    </CardList>
                </CardBody>
            </CardLink>
        </Wrapper>
    );
};

export default CountryCard;