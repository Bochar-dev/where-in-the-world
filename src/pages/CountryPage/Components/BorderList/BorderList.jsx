import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBorderCountries } from '../../../../store/countries/selectors';
import { fetchCountriesCodeAction } from '../../../../store/apiActions';
import BorderItem from '../BorderItem/BorderItem';
import { List } from './styles';

const BorderList = ({ borders }) => {
    const dispatch = useDispatch();
    const borderCountries = useSelector(getBorderCountries);

    useEffect(() => {
        if (borders.length) {
            const codes = borders.join(',');

            dispatch(fetchCountriesCodeAction(codes));
        }
    }, [borders, dispatch]);

    return (borders.length &&
        <List>
            {borderCountries.map((borderCountry) => (
                <BorderItem key={borderCountry.name} name={borderCountry.name} />
            ))}
        </List>
    );
};

export default BorderList;
