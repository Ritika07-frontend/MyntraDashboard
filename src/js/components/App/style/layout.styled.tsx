import styled from "styled-components";

export interface props {
	marginLeft?: any;
	width?: any;
	flex?: any;
}
export const Flex = styled.div<props>`
  	display: flex;
    margin-Left : ${p => p.marginLeft ? p.marginLeft : ""};
`
export const Container = styled.div`
    border-radius : 20px;
    width: calc(100% - 30px);
    /* height : 100%; */
    padding : 15px;
    margin : 15px;
    /* height : fit-content; */
    box-shadow: 0px 5px 25px #52575D1A;;
    font-family : 'Noto Sans', sans-serif;
`