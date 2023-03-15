import { Container } from '../../styles/global';
import { Wrapper } from './Wrapper';

const Main = ({children}) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};

export default Main;
