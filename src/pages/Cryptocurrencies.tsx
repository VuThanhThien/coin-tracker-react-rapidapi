import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptoQuery } from '../app/services/cryptoApi';
import { Loader } from '../components/Loader';
import { CryptocurrenciesProp } from '../entities/Coins';

export const Cryptocurrencies = ({ simplified }: CryptocurrenciesProp) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptoQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((item: any) => item.name.toLowerCase().includes(searchTerm));
        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);
    if (isFetching) return <Loader />;
    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {!!cryptos && cryptos.map((currency: any) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />} hoverable>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

