/**
 * @author Muhamad Humam
 * @email muhamadhumamm17@gmail.com
 * @create date 2020-09-02 21:35:06
 * @modify date 2020-09-02 21:35:06
 * @desc User Component
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListRepository from './ListRepository';
import { Layout, Row, Col, Avatar, Typography } from 'antd';

const { Title } = Typography;

const User = props => {
    const { currentUserData, userRepos } = props;
    const { userData } = currentUserData;
    const { repos, isFetching } = userRepos;
    return (
        <Layout style={{ padding: '24px', background: '#fff' }} className="card-shadow">
            <Row style={{ marginTop: '50px' }}>
                <Col xs={24} sm={24} md={12} lg={16} xl={8} style={{ textAlign: 'center' }}>
                    <Avatar alt="Icon"
                        style={{ width: '300px', height: '300px', marginTop: '50px' }}
                        src={userData.avatar_url}
                    />
                    <Title>{userData.login}</Title>
                </Col>
                <Col xs={24} sm={24} md={12} lg={16} xl={16}>
                    {!currentUserData.isFetching &&
                        !userRepos.isFetching &&
                        repos.length === 0 && (
                            <h2>No repos found for user {userData.login}</h2>
                        )}
                    {!isFetching &&
                        repos.length > 0 && (
                            <div>
                                <Title level={2}>Repositories</Title>
                                <ListRepository repos={repos} />
                            </div>
                        )}
                </Col>
            </Row>
        </Layout>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
