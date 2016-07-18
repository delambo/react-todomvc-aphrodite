
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import { css } from 'aphrodite';
import styles from './style'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1 className={css(styles.h1)}>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
