import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const NotFoundInner = styled.div``;

export const NotFoundTitle = styled.h1`
    margin: 0;
    font-size: 100px;
    font-weight: var(--fw-bold);
    text-align: center;

    @media screen and (min-width: 767px) {
        font-size: 250px;
    }
`;

export const NotFoundText = styled.p`
    margin: 0 0 20px 0;
    text-align: center;
    font-size: var(--fs-lg);

    @media screen and (min-width: 767px) {
        margin: 0 0 40px 0;
    }
`;

export const NotFoundLink = styled(Link)`
    margin: 0 auto;
    display: block;
    padding: 10px 25px;
    border-radius: var(--radius);
    width: fit-content;
    color: var(--color-text);
    background-color: var(--color-ui);
    text-decoration: none;
    box-shadow: var(--shadow);
`;

const NotFoundContent = () => {
    return (
        <NotFoundWrapper>
            <NotFoundInner>
                <NotFoundTitle>404</NotFoundTitle>
                <NotFoundText>Oops, this page could not be found</NotFoundText>
                <NotFoundLink to="/">Back to home</NotFoundLink>
            </NotFoundInner>
        </NotFoundWrapper>
    );
};

export default NotFoundContent;
