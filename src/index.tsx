import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-04-11 10:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 900,
          createdAt: new Date('2021-04-10 10:00:00')
        },
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions',() => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', {
        ...data,
        createdAt: new Date()
      });
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
