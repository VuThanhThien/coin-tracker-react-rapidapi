import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';

import { useGetExchangesQuery } from '../app/services/cryptoApi';
import {Loader} from '../components/Loader';

const { Text } = Typography;
const { Panel } = Collapse;

export const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery({uuid: 'Qwsogvtv82FCd'});
    const exchangesList = data?.data?.exchanges;
    if (isFetching) return <Loader />;

    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Price</Col>
            </Row>
            <Row>
                {
                    !!exchangesList.length && data.status === 'success' &&
                    exchangesList.map((exchange: any) => (
                    <Col span={24} >
                        <Collapse >
                            <Panel
                                key={exchange?.id}
                                showArrow={false}
                                header={(
                                    <Row style={{width: '100%'}} >
                                        <Col span={6}>
                                            <Text><strong>{exchange?.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange?.iconUrl} />
                                            <Text><strong>{exchange?.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(parseFloat(exchange['24hVolume']))}</Col>
                                        <Col span={6}>{millify(exchange?.numberOfMarkets)}</Col>
                                        <Col span={6}>{millify(parseFloat(exchange?.price))}%</Col>
                                    </Row>
                                )}
                            >
                                <a href={exchange?.coinrankingUrl}>{exchange?.coinrankingUrl}</a> 
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    );
};

