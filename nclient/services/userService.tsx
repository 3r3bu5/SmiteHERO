import authHeader from './getTokenFromHeader';

const API_URL = process.env.REACT_APP_API_URL

class UserService {

  async getCredits() {
    return await fetch(API_URL + '/user/credits', {headers: authHeader() as HeadersInit});
  }
 
  async post(ss: string) {
    return await fetch(API_URL + "/checkout/payment_intents", {headers: authHeader() as HeadersInit} );
  }
}

export default new UserService();