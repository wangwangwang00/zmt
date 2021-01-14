import styled from 'styled-components';

export const HomeWrapper = styled.div`
    font-size:12px;
    color:red;
    .banner{
        background-color:#ff0;
        &:hover{
            color:#fff;
        }
        &::after {
            content:'aaa'
        }

    }
`

export const TitleWrapper = styled.h2`
    text-decoration:underline;
`