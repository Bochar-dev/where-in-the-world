import ListTitle from '../ListTitle/ListTitle';
import { CardDetailList } from './CardDetailList';
import { CardDetailListItem } from './CardDetailListItem';

const CountryDetailList = ({list}) => {
    return (
        <CardDetailList>
            {list.map((item) => (
                <CardDetailListItem key={item.title}>
                    <ListTitle>{item.title}:</ListTitle> {item.description}
                </CardDetailListItem>
            ))}
        </CardDetailList>
    );
};

export default CountryDetailList;
