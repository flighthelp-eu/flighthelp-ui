import { makeStyles } from '@mui/styles';
export { styled } from '@mui/material';

const useGlobalStyles = makeStyles({
  '@global': {
    '*:focus': {
      outline: 0,
    },
    '.hidden-scrollbar': {
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        display: 'none',
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        display: 'none',
      },
    },
  },
});

export default useGlobalStyles;
