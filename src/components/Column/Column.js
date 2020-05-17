import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>Whatever it takes!</h3>
            </section>
        )
    }
}