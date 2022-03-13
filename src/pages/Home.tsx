/** @jsxImportSource @emotion/react */
import tw from "twin.macro"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import React from "react"

import logo from "../images/logo.svg"

export const Home = () => {
  return (
    <div tw="text-center">
      <Header tw="bg-red-500 mx-20">
        <Logo src={logo} alt="logo" />
        <p tw="text-green-600">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          tw="text-blue-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </Header>
    </div>
  )
}

const Header = styled.header((props) => [
  tw`
    flex
    flex-col
    bg-blue-700
    min-h-screen
    justify-center
    items-center
    font-size[calc(10px + 2vmin)]
    text-white
  `,
])
const Logo = styled.img((props) => [
  tw`
    h-40 
    pointer-events-none
  `,
  css`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${AppLogoSpin} infinite 20s linear;
    }
  `,
])

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
