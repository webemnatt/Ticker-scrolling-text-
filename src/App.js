import React from 'react';
import './style.scss';

import { assetList } from './assetList';
import Ticker from 'react-ticker';

export default function App() {
  return (
    <>
      <Ticker>
        {({ index }) => (
          <>
            <div
              className="
                pages-carrossel-de-acoes-container
                price"
            >
              {assetList.map((item, index) => {
                let value =
                  Math.sign(item.percentage) > 0 ? 'positive' : 'negative';
                return (
                  <>
                    <div className="price-container">
                      <h2>{item.name}</h2>
                      <p>{item.value}</p>
                      <div className="price-align-item">
                        <div className={`price-icon price-icon-${value}`}></div>
                        <p
                          className={`price-percentage price-percentage-${value}`}
                        >
                          {item.percentage} %
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </Ticker>
    </>
  );
}
