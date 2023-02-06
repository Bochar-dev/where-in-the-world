import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform: translate(-50%, -50%);
`;

export const SpinnerElement = styled.div`
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
