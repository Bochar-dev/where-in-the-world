import CountryDetailList from '../CountryDetailList/CountryDetailList';
import { Wrapper } from './Wrapper';
import { CardLink } from './CardLink';
import { CardImage } from './CardImage';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';

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
                    <CountryDetailList list={info} />
                </CardBody>
            </CardLink>
        </Wrapper>
    );
};

export default CountryCard;
