import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 70px;
`;

export const Image = styled.img`
    display: block;
    border-radius: var(--radius);
    overflow: hidden;
    width: 50%;
`;

export const Content = styled.div`
    width: 50%;
`;

export const WrapperList = styled.div`
    display: flex;
    gap: 30px;
    margin: 0 0 30px 0;

    &:last-child {
        margin: 0;
    }
`;

export const InfoList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const InfoListItem = styled.li`
    display: flex;
    gap: 5px;
    margin: 0 0 15px 0;

    &:last-child {
        margin: 0;
    }
`;
