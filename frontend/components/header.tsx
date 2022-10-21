import { Button, Navbar, Text, useTheme } from '@nextui-org/react'
import { NextPage } from 'next'
import { useWeb3 } from '../hooks/useWeb3'

const Header: NextPage = () => {
  const { isDark } = useTheme()
  const { getAccountInject } = useWeb3()
  return (
    <Navbar maxWidth={'fluid'} isBordered={isDark} variant="sticky">
      <Navbar.Brand>
        <Text
          b
          color="inherit"
          hideIn="xs"
          onClick={async () => {
            console.log(await getAccountInject())
          }}
        >
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}

export default Header
