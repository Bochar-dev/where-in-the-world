import React from 'react';
import { BorderLink } from './styles';

const BorderItem = ({name}) => {
    return (
        <BorderLink to={`/country/${name}`}>{name}</BorderLink>
    );
};

export default BorderItem;
