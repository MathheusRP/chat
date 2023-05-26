import styled from "styled-components";

export const FormStyled = styled.div`

    height: 100vh;
    width: 100vw;
    background-color: var(--grey-2);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.3);
        border-radius: 16px;
        width: 90%;
        max-width: 500px;
        /* height: 400px; */
        padding: 40px 0px;
        align-items: center;
        justify-content: center;
        min-height: max-content;

        form {
            width: 100%;
            max-width: 300px;
            display: flex;
            flex-direction: column;
            gap: 22px;

            span {
                align-self: flex-end;
                transform: translateY(-15px);
                color: var(--grey-4);
                cursor: pointer;

                &:hover {
                    color: var(--color-2);
                }
            }

            .buttons {
                display: flex;
                gap: 16px;
                align-items: center;
                justify-content: space-between;

                .button1 {
                    width: 120px;
                    height: 40px;
                    background-color: var(--grey-1);
                    border: 2px solid var(--grey-2);
                    border-radius: 8px;
                    font-size: 18px;
                    color: var(--grey-2);

                    &:hover {
                        background-color: var(--color-2);
                        color: var(--grey-2);
                        border-color: var(--grey-2);
                    }
                }

                .button2 {
                    width: 120px;
                    height: 40px;
                    background-color: transparent;
                    border: 2px solid var(--grey-1);
                    border-radius: 8px;
                    font-size: 18px;
                    color: var(--grey-1);

                    &:hover {
                        background-color: var(--color-2);
                        color: var(--grey-2);
                        border-color: var(--grey-2);
                    }
                }
            }
        }
    }
`