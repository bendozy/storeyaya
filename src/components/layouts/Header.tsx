import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import useDarkMode from 'use-dark-mode'
import { FiSun, FiMoon } from 'react-icons/fi'

type HeaderProps = {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
    storageKey: 'darkMode',
  })

  return (
    <header
      style={{
        background: `#ff6900`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1176,
        }}
      >
        <div className="mx-5 md:mx-0">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div className="dark-mode-toggle">
            <button
              className="text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={darkMode.toggle}
            >
              {darkMode.value ? (
                <FiSun color="white" />
              ) : (
                <FiMoon color="black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
