#Remove the STORAGE FOR RATES

<template>
  <section class="home-page">
    <div class="main-info-container">
      <div v-if="loggedInUser" class="user-info">
        <h3>{{ loggedInUser.name }}</h3>
        <p>Balance: {{ loggedInUser.balance }} BTC</p>
      </div>
      <transactions :loggedInUser="loggedInUser" />
      <div v-if="currencies" class="coin-info">
        <table v-if="rates">
          <thead>
            <select v-on:change="getRates" name="currencies" v-model="currCurrency">
              <option v-for="currency in currencies" :key="currency" :value="currency">{{currency}}</option>
            </select>
          </thead>
          <tbody>
            <tr>
              <td>Symbol</td>
              <td>{{rates['symbol']}}</td>
            </tr>
            <tr>
              <td>15 Minutes</td>
              <td>{{rates['15m']}}</td>
            </tr>
            <tr>
              <td>Last</td>
              <td>{{rates.last}}</td>
            </tr>
            <tr>
              <td>Buy</td>
              <td>{{rates.buy}}</td>
            </tr>
            <tr>
              <td>Sell</td>
              <td>{{rates.sell}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3 class="transactions-title">Your Latest Transactions</h3>
    <ul class="transactions-list">
      <li v-for="transaction in transactions" :key="transaction">
        <h5>To: {{transaction.to}} ({{transaction.toId}})</h5>
        <h5>At: {{transaction.at}}</h5>
        <p>Amount: {{transaction.amount}} BTC</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { userService } from "../services/userService.js";
import { bitcoinService } from "../services/bitcoinService.js";
import Transactions  from '../components/Transaction.vue'
export default {
  data() {
    return {
      loggedInUser: null,
      rates: null,
      currencies: [],
      currCurrency: 'USD'
    };
  },
  methods: {
    async getAllCurrencies(){
      this.currencies = await bitcoinService.getCurrenices()
    },
    async getRates(){
      this.rates = await bitcoinService.getRate(this.currCurrency)
    }
  },
  computed:{    
    transactions(){
      return userService.getTransactions()
    }
  },
  created() {
    this.loggedInUser = userService.getUser();
    this.getAllCurrencies()
    this.getRates()
  },
  components:{
    Transactions
  }
};
</script>

<style lang="scss" scoped>
.home-page{
  .main-info-container {
    margin: 5rem auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .user-info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 1rem;
      width: 330px;
      height: 200px;
      border-radius: 10px;
      p {
        align-self: flex-end;
      }
      background-color: hsla(42, 74%, 49%, 1);
      background-image: radial-gradient(
          at 93% 78%,
          hsla(176, 75%, 61%, 1) 0px,
          transparent 50%
        ),
        radial-gradient(at 0% 68%, hsla(61, 99%, 70%, 1) 0px, transparent 50%),
        radial-gradient(at 42% 12%, hsla(74, 74%, 49%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 26%, hsla(160, 100%, 37%, 1) 0px, transparent 50%);
    }
    .coin-info{
      color: white;
      border: 5px solid hsla(160, 100%, 37%, 1);
      table{
        width: 300px;
        thead{
          select{
            color: white;
            background: transparent;
            font-size: 1rem;
            padding: 0.5rem;
            border-color: goldenrod;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            &:focus{
              background-color: goldenrod;
              color: black;
            }
          }
        }
        tbody{
          background-color: hsla(160, 100%, 37%, 1);
          td{
            padding: 1rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .transactions-title{
    text-align: center;
    color: white;
    margin-block-end: 3rem;
  }
  .transactions-list{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    li{
      border: 5px solid hsla(160, 100%, 37%, 1);
      padding: 1rem;
      background-color: goldenrod;
      border-radius: 15px;
      max-width: 250px;
      h5{
        margin-block-end: 0.5rem;
      }
    }
  }
}
</style>