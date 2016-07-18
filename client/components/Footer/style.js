
import shared from './../../shared/style'
import R, { mergeAll } from 'ramda';
import { StyleSheet } from 'aphrodite';

const filterLinkHighlight = {
  borderColor: 'rgba(175, 47, 47, 0.1)',
}

export default StyleSheet.create({

  normal: {
    color: '#777',
    padding: '10px 15px',
    height: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e6e6e6',

    ':before': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      height: '50px',
      overflow: 'hidden',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2)',
    },
  },

  smallNormal: {
    '@media (max-width: 430px)': {
      height: '50px',
    },
  },

  filters: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'absolute',
    right: 0,
    left: 0,
  },

  smallFilters: {
    '@media (max-width: 430px)': {
      bottom: '10px',
    },
  },

  filtersItem: {
    display: 'inline',
  },

  filterLink: {
    color: 'inherit',
    margin: '3px',
    padding: '3px 7px',
    textDecoration: 'none',
    border: '1px solid transparent',
    borderRadius: '3px',

    ':hover': filterLinkHighlight
  },

  filterLinkHighlight: filterLinkHighlight,

  count: {
    float: 'left',
    textAlign: 'left',
  },

  strong: {
    fontWeight: 300,
  },

  clearCompleted: mergeAll([shared.button, shared.formEl, {
    float: 'right',
    position: 'relative',
    lineHeight: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
    visibility: 'hidden',
    position: 'relative',

    ':active': {
      float: 'right',
      position: 'relative',
      lineHeight: '20px',
      textDecoration: 'none',
      cursor: 'pointer',
      visibility: 'hidden',
      position: 'relative',
    },

    ':after': {
      visibility: 'visible',
      content: '"Clear completed"',
      position: 'absolute',
      right: 0,
      whiteSpace: 'nowrap',
    },

    ':hover': {
      ':after': {
        textDecoration: 'underline',
      },
    },
  }]),

})
