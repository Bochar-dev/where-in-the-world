import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Inner = styled.div``;

export const CardDetailImage = styled.img``;

export const CardDetailContent = styled.div``;

export const CardDetailTitle = styled.h1``;

export const CardDetailList = styled.ul``;

export const CardDetailListItem = styled.li``;

export const CardDetailItemTitle = styled.span``;

export const CardDetailBottom = styled.div``;

export const CardDetailLinks = styled.ul``;

export const CardDetailLinksItem = styled.li``;

const CardDetail = (props) => {
    const {
        img = '',
        name = '',
        info = [],
        secondInfo
    } = props;

    return (
        <Wrapper>
            <Inner>
                <CardDetailImage src={img} />
                <CardDetailContent>
                    <CardDetailTitle>{name}</CardDetailTitle>
                    <CardDetailList>
                        {info.map((element) => (
                            <CardDetailListItem key={element.name}>
                                <CardDetailItemTitle>{element.title}:</CardDetailItemTitle> {element.description}
                            </CardDetailListItem>
                        ))}
                    </CardDetailList>
                    <CardDetailBottom>
                        <CardDetailItemTitle>{secondInfo ? secondInfo.title : ''}</CardDetailItemTitle>
                        <CardDetailLinks>
                            {secondInfo ? secondInfo.links.map((link) => (
                                <CardDetailLinksItem key={link}>
                                    <Link to="/">link</Link>
                                </CardDetailLinksItem>
                            )) : null}
                        </CardDetailLinks>
                    </CardDetailBottom>
                </CardDetailContent>
            </Inner>
        </Wrapper>
    );
};

export default CardDetail;