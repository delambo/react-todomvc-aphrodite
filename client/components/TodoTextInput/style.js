
import R, { merge } from 'ramda';
import { StyleSheet } from 'aphrodite';

const newState = {
  position: 'relative',
  margin: 0,
  width: '100%',
  fontSize: '24px',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  lineHeight: '1.4em',
  border: 0,
  outline: 'none',
  color: 'inherit',
  padding: '6px',
  border: '1px solid #999',
  boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  fontSmoothing: 'antialiased',
}


export default StyleSheet.create({

  'new': merge(newState, {
    padding: '16px 16px 16px 60px',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
  }),

  edit: newState,

  editing: {
    display: 'block',
    width: '506px',
    padding: '13px 17px 12px 17px',
    margin: '0 0 0 43px',
  },

})
