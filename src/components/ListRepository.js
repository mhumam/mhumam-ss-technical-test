/**
 * @author Muhamad Humam
 * @email muhamadhumamm17@gmail.com
 * @create date 2020-09-02 21:34:50
 * @modify date 2020-09-02 21:34:50
 * @desc List Repository Component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { List, Card, Form, Row, Col } from 'antd';

const ListRepository = props => (
    <List
        pagination={
            { pageSize: 4 }
        }
        dataSource={props.repos}
        renderItem={item => (
            <RepositoryCard {...item} />
        )}
    />
);

const RepositoryCard = props => (
    <div style={{ background: '#ECECEC', padding: '10px 30px' }}>
        <Card title={props.name} bordered={false} style={{ width: '100%' }} className="card-shadow">
            <Form layout="vertical">
                <Row>
                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <Form.Item label="Full Name">
                            <span className="ant-form-text">{(props.full_name) ? props.full_name : '-'}</span>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={{ span: 6 }} xl={{ span: 6 }}>
                        <Form.Item label="Language">
                            <span className="ant-form-text">{(props.language) ? props.language : '-'}</span>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={{ span: 6 }} xl={{ span: 6 }}>
                        <Form.Item label="Update At">
                            <span className="ant-form-text">{(props.updated_at) ? props.updated_at : '-'}</span>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
                        <Form.Item label="Description">
                            <span className="ant-form-text">{(props.description) ? props.description : '-'}</span>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    </div>
)
ListRepository.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default ListRepository;
