
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import classnames from 'classnames'
import { css } from 'aphrodite';
import styles from './style'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo({ id, text })
    }
    this.setState({ editing: false })
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
           editing={this.state.editing}
           onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className={classnames({[css(styles.hideView)]: this.state.editing})}>
          <input className={css(styles.toggle, styles.toggleDevice)}
             type="checkbox"
             checked={todo.completed}
             onChange={() => completeTodo(todo.id)} />

          <label className={classnames(css(styles.label), { [css(styles.completedLabel)]: todo.completed})} onDoubleClick={::this.handleDoubleClick}>
            {todo.text}
          </label>

          <button className={classnames(css(styles.destroy), 'destroy')} onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    // TODO: compose
    const classes = classnames(css(styles.normal), {
      [css(styles.completed)]: todo.completed,
      [css(styles.editing)]: this.state.editing
    })

    return (
      <li className={classes}>
        {element}
      </li>
    )
  }
}

export default TodoItem
