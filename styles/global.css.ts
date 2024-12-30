import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: 'black',
    color: 'white',
});

globalStyle('a', {
    color: 'inherit',
    textDecoration: 'none',
});

globalStyle('button', {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
});
