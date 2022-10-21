import Web3 from 'web3'

export function useWeb3() {
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
  const eth = web3.givenProvider

  async function getBalance(address: string): Promise<string> {
    const balance = await web3.eth.getBalance(address)
    return web3.utils.fromWei(balance, 'ether')
  }

  async function getAccount() {
    const accounts = await web3.eth.getAccounts()
    return accounts[0] ? accounts[0].toLowerCase() : ''
  }

  async function getAccountInject() {
    const accounts = await eth.request({ method: 'eth_requestAccounts' })
    return accounts[0] ? accounts[0].toLowerCase() : ''
  }

  async function getChain() {
    return await web3.eth.getChainId()
  }

  async function changeChain() {
    await eth.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    })
  }

  // async function onAccounstChanged(onChange: () => void) {
  //   eth.on('accountsChanged', onChange)
  // }

  // async function onChainChanged(onChange: () => void) {
  //   eth.on('chainChanged', onChange)
  // }

  return {
    getBalance,
    getAccount,
    getChain,
    changeChain,
    getAccountInject,
    eth,
  }
}