import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        imgsrc: PropTypes.string,
    }

    static defaultProps = {
        children: <p>What needs to be done:</p>,
    }

    render() {
        return  (
            <section className={styles.component}>
                    <Hero titleText={this.props.title} imgsrc={this.props.imgsrc} />
                    <div className={styles.description}>
                        {this.props.children}
                    </div>
                    <div className={styles.columns}>
                        <Column title='Programming' />
                        <Column title='Netflix' />
                        <Column title='Reading' />
                    </div>
            </section>
        )
    }
}

export default List;