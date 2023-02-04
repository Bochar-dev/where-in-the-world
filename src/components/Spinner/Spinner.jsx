import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    width: 100%;
`;

export const SpinnerElement = styled.div`
    margin: 0 auto;
    border: 5px solid var(--color-text);
    border-bottom: 5px solid var(--color-bg);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: transparent;
    animation: spinnner 1s infinite linear;

    @keyframes spinnner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <SpinnerElement></SpinnerElement>
        </SpinnerWrapper>
    );
};

export default Spinner;