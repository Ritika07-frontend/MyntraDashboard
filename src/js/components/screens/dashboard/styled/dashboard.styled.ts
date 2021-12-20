import styled from "styled-components";

export interface props {
    height?: string
    width?: any;
    margin?: any
    flexDirection?: any
}

export const Flex = styled.div<props>`
    display: flex;
    flex-wrap : wrap;
    flex-direction : ${p => p.flexDirection ? p.flexDirection : ""};
`

export const NonFlex = styled.div<props>`
    height : ${p => p.height ? p.height : ""};
    width : ${p => p.width ? p.width : ""};
    margin : ${p => p.margin ? p.margin : ""};
`