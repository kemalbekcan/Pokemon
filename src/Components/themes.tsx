import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    card: "#fff",
    border: "rgba(0,0,0,.125)",
    paginationColor: "#0d6efd",
    paginationBorder: "#dee2e6",
    paginationBackground: "#fff"
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    card: "#000",
    border: "rgba(255,255,255,.125)",
    paginationColor: "#0d6efd",
    paginationBorder: "#dee2e6",
    paginationBackground: "#000"
};

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props: any) => props.theme.body};
    }
    .card {
      background-color: ${(props: any) => props.theme.card};
      border: 1px solid ${(props: any) => props.theme.border};
      color: ${(props: any) => props.theme.fontColor};
    }
    .pagination .page-item .page-link{
      border: 1px solid ${(props: any) => props.theme.paginationBorder};
      color: ${(props: any) => props.theme.paginationColor};
      background-color: ${(props: any) => props.theme.paginationBackground};
    }
`;