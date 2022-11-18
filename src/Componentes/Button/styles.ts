import styled, { css } from "styled-components"
import { IButtonStyle } from "./types"

export const ButtonContainer = styled.button<IButtonStyle>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color:#fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    cursor: pointer;

    ${({variant}) => variant !=="primary" && css`
        min-width: 167px;
        height: 33px;
        background: #e4105D;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after{
            content: "";
            position: absolute;
            border:1px solid #e4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;

        }
    `}
`