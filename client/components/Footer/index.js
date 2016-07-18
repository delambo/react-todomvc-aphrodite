
import React, { Component } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import classnames from 'classnames'
import { css } from 'aphrodite';
import styles from './style'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
}

class Footer extends Component {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className={css(styles.count)}>
        <strong className={css(styles.strong)}>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <a className={classnames(css(styles.filterLink), { [css(styles.filterLinkHighlight)]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className={css(styles.clearCompleted)} onClick={onClearCompleted}>
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className={css(styles.normal, styles.smallNormal)}>
        {this.renderTodoCount()}
        <ul className={css(styles.filters, styles.smallFilters)}>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li className={css(styles.filtersItem)} key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

export default Footer
