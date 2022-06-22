import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --pink-primary: #FF577F;
    --pink-focus: #FF427F;
    --pink-disable: #59323F;

    --grey-zero:#F8F9FA;
    --grey-one : #868E96;
    --grey-two: #343B41;
    --grey-three: #212529;
    --grey-four: #121214;

    // feedback
    --green: #3FE864;
    --pink-negative: #E83F5B;

}

body{
    background: var(--grey-four);
    color: var(--grey-zero);

    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

body, input, button{
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
}
`;
