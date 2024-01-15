// constants.js
import ticketFactory from './abi/ticketFactory.json';
import tokenFactory from './abi/tokenFactory.json';

export const CONTRACT_ADDRESS = "0x8E10f7f828Dcd959889211B03029aFb955528B8e";
export const TICKET_FACTORY_ABI = ticketFactory;
export const TOKEN_FACTORY_ABI = tokenFactory;

export const TOKENS_DATA = {
    'USDC' : {
      name: 'usd coin',
      address: '0x43b341fbae05d3bfa351362d11783347e184050d',
    }, 
    'USDT' : {
      name: 'usd tether',
      address: '0x0bF5c5D1b9e0F0F1E6f0F3b2d5C7E5b4B9d9Ea7d',
    }
}
  