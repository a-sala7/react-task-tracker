import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

    const onClickBtn = () => {console.log("Hi!");}

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClickBtn} />
        </header>
    )
}

Header.defaultProps = {
    title: "DEFAULT"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header