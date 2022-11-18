import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main `
    width:100%;
    max-width:80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700px;
    font-size: 18px;
    line-height:15px;
    margin-bottom:24px;

    color:#ffffff;

`

export const TitleHighlight =styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700px;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;

    color: #FFFFFF70;
`

export const Columns = styled.h3<IColumn>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`