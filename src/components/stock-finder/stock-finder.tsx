import { Component, Event, EventEmitter, h, State } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @State() searchResults: { symbol: string, name: string }[] = [];
  @State() loading = false;

  @Event({ bubbles: true, composed: true }) ucSymbolSelected: EventEmitter<string>;

  onFindStocks(event: Event) {
    this.loading = true;
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRes => {
        this.searchResults = parsedRes['bestMatches'].map(item => {
          this.loading = false;
          return { name: item['2. name'], symbol: item['1. symbol'] };
        });
      })
      .catch(err => {
        console.error(err);
        this.loading = false;
      });
  }

  onSelectSymbol(symbol: string) {
    this.ucSymbolSelected.emit(symbol);
  }

  render() {
    let content =
      <ul>
        {
          this.searchResults.map(result => (
            <li onClick={this.onSelectSymbol.bind(this, result.symbol)}>
              <strong>{result.symbol}</strong> - {result.name}
            </li>
          ))
        }
      </ul>

    if (this.loading) {
      content = <uc-spinner />;
    }

    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input
          type='text'
          id='stock-symbol'
          ref={el => this.stockNameInput = el}
        />
        <button type='submit'>Find</button>
      </form>,

      content,
    ];
  }

}
