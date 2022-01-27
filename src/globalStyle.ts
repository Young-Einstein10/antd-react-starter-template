import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .table-responsive .ant-table-content {
        display: block;
        width: 100%;
        overflow-x: auto;
    }
`;

export default GlobalStyle;
