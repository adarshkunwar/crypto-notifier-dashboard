import React from "react";
import { GrFormSearch } from "react-icons/gr";
import TableList from "./TableList";
const Table = () => {
  let data = [
    {
      id: "5e5bda8b-a4f3-4f8d-969b-cca44e7dbdc6",
      rank: 1,
      name: "Bitcoin",
      code: "BTC",
      image: "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg?size=30x30",
      price: "$ 19,210.35",
      market_cap: "$ 368.47B",
      changeIn24: "+0.29%",
      crypto_details_link: "/coin/Qwsogvtv82FCd+bitcoin-btc",
      recordInWatchlist: false,
    },
    {
      id: "f43e2e20-1d48-4e3d-8e62-4d2a543a2b6e",
      rank: 2,
      name: "Ethereum",
      code: "ETH",
      image: "https://cdn.coinranking.com/rk4RKHOuW/eth.svg?size=30x30",
      price: "$ 1,287.80",
      market_cap: "$ 157.12B",
      changeIn24: "+0.11%",
      crypto_details_link: "/coin/razxDUgYGNAdQ+ethereum-eth",
      recordInWatchlist: true,
    },
    {
      id: "e7ae6c8e-84d7-405a-acf8-2ccc252d08b5",
      rank: 3,
      name: "Tether USD",
      code: "USDT",
      image: "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg?size=30x30",
      price: "$ 1.003",
      market_cap: "$ 68.65B",
      changeIn24: "+0.34%",
      crypto_details_link: "/coin/HIVsRcGKkPFtW+tetherusd-usdt",
      recordInWatchlist: true,
    },
    {
      id: "328f5563-dc07-4266-be0a-1173b90be85f",
      rank: 4,
      name: "USDC",
      code: "USDC",
      image: "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg?size=30x30",
      price: "$ 1.003",
      market_cap: "$ 45.14B",
      changeIn24: "+0.30%",
      crypto_details_link: "/coin/aKzUVe4Hh_CON+usdc-usdc",
      recordInWatchlist: false,
    },
    {
      id: "bbd7d606-6074-4b36-b096-412370677b89",
      rank: 5,
      name: "Binance Coin",
      code: "BNB",
      image: "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg?size=30x30",
      price: "$ 271.03",
      market_cap: "$ 38.71B",
      changeIn24: "-0.02%",
      crypto_details_link: "/coin/WcwrkfNI4FUAe+binancecoin-bnb",
      recordInWatchlist: true,
    },
    {
      id: "70a6e479-5fab-4732-9532-ff96f6453412",
      rank: 6,
      name: "XRP",
      code: "XRP",
      image: "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg?size=30x30",
      price: "$ 0.4847",
      market_cap: "$ 24.22B",
      changeIn24: "-0.13%",
      crypto_details_link: "/coin/-l8Mn2pVlRs-p+xrp-xrp",
      recordInWatchlist: false,
    },
    {
      id: "8bbccfa8-5d42-43ec-a1f7-611476792aaf",
      rank: 7,
      name: "Binance USD",
      code: "BUSD",
      image: "https://cdn.coinranking.com/6SJHRfClq/busd.svg?size=30x30",
      price: "$ 1.003",
      market_cap: "$ 21.43B",
      changeIn24: "+0.30%",
      crypto_details_link: "/coin/vSo2fu9iE1s0Y+binanceusd-busd",
      recordInWatchlist: false,
    },
    {
      id: "1b249f02-0f41-4dc0-9903-9e789d2022a8",
      rank: 8,
      name: "Cardano",
      code: "ADA",
      image: "https://cdn.coinranking.com/ryY28nXhW/ada.svg?size=30x30",
      price: "$ 0.3684",
      market_cap: "$ 11.46B",
      changeIn24: "+0.25%",
      crypto_details_link: "/coin/qzawljRxB5bYu+cardano-ada",
      recordInWatchlist: false,
    },
    {
      id: "30e949cb-b71b-4b09-9573-aaa4f3e908e5",
      rank: 9,
      name: "Solana",
      code: "SOL",
      image: "https://cdn.coinranking.com/yvUG4Qex5/solana.svg?size=30x30",
      price: "$ 30.04",
      market_cap: "$ 10.76B",
      changeIn24: "+0.28%",
      crypto_details_link: "/coin/zNZHO_Sjf+solana-sol",
      recordInWatchlist: false,
    },
    {
      id: "40faef9c-c890-45ca-8667-d62badde7a79",
      rank: 10,
      name: "Dogecoin",
      code: "DOGE",
      image: "https://cdn.coinranking.com/H1arXIuOZ/doge.svg?size=30x30",
      price: "$ 0.05918",
      market_cap: "$ 8.07B",
      changeIn24: "+0.49%",
      crypto_details_link: "/coin/a91GCGd_u96cF+dogecoin-doge",
      recordInWatchlist: false,
    },
    {
      id: "ff508380-ee9e-4104-bee8-1db1fd6dbf73",
      rank: 11,
      name: "Polkadot",
      code: "DOT",
      image: "https://cdn.coinranking.com/RsljYqnbu/polkadot.svg?size=30x30",
      price: "$ 6.175",
      market_cap: "$ 7.12B",
      changeIn24: "+1.62%",
      crypto_details_link: "/coin/25W7FG7om+polkadot-dot",
      recordInWatchlist: false,
    },
  ];
  return (
    <div className="mx-32 mt-10">
      {/* text */}
      <div className="flex items-center justify-between">
        <div className="flex-col space-y-1">
          <div className="font-bold text-4xl">Cryptocurrency price list</div>
          <div className="font-normal text-xl">
            All Cryptocurrency ranked by market cap.
          </div>
        </div>
        <div className="border w-96 px-3 flex justify-between items-center rounded-md py-3">
          <input
            type="text"
            placeholder="Search crypto coin"
            className="border-none outline-none bg-transparent"
          />
          <div className="text-xl">
            <GrFormSearch />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="bg-blue-300 grid grid-cols-12 mt-6 py-3 font-bold rounded-t-2xl">
        <div className="col-span-1"></div>
        <div className="col-span-1">Rank</div>
        <div className="col-span-4">Coin</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Market Cap</div>
        <div className="col-span-2">24H</div>
      </div>
      {data.map((data) => (
        <TableList data={data} />
      ))}
    </div>
  );
};

export default Table;
