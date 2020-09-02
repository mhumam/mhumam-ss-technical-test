/**
 * @author Muhamad Humam
 * @email muhamadhumamm17@gmail.com
 * @create date 2020-09-02 21:34:27
 * @modify date 2020-09-02 21:34:27
 * @desc Home Page
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Typography, Row, Col, Spin } from 'antd';
import { selectUser, fetchUserAndRepos } from '../../redux/Actions';
import SearchField from '../../components/SearchField';
import User from '../../components/User';

const { Content } = Layout;
const { Title } = Typography;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(user) {
        const { dispatch } = this.props;
        await this.setState({ isLoading: true });
        await dispatch(selectUser(user));
        await dispatch(fetchUserAndRepos(user));
        await this.setState({ isLoading: false });
    }

    render() {
        const { currentUser, currentUserData, userRepos } = this.props;
        const { userData } = currentUserData;
        return (
            <Layout>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: '50px' }}>
                    <div style={{ margin: '0 auto', textAlign: "center", marginBottom: '40px' }}>
                        <img src="https://assets.website-files.com/5d8a2887296e9177accb65bc/5f362918e484ac585ec6e68d_softwareseni-logo-dark.svg" alt="Software Seni" className="background-login" style={{ width: '400px', margin: '20px 0' }} />
                        <Title level={3}>Technical Test - React Js Developer</Title>
                    </div>
                </Content>
                <Content style={{ padding: '0 50px', minHeight: '650px' }}>
                    <Layout className="card-shadow" style={{ width: "70%", padding: '24px 0', background: '#fff', margin: '0 auto', marginBottom: '20px', textAlign: 'center' }}>
                        <Row>
                            <Col xs={{ span: 12, offset: 6 }} lg={{ span: 12, offset: 6 }}>
                                <Spin spinning={this.state.isLoading} >
                                    <SearchField onSubmit={this.handleSubmit} />
                                </Spin>
                            </Col>
                        </Row>
                    </Layout>
                    {!currentUserData.isFetching &&
                        userData.message && (
                            <div>
                                <h2>{userData.message}</h2>
                                <p>{userData.documentation_url}</p>
                            </div>
                        )}
                    {currentUser !== '' &&
                        !userData.message &&
                        !currentUserData.isFetching && (
                            <User
                                currentUserData={currentUserData}
                                userRepos={userRepos}
                            />
                        )}
                </Content>
            </Layout>
        );
    }
}

App.propTypes = {
    currentUser: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { currentUser, currentUserData, userRepos } = state;
    return {
        currentUser,
        currentUserData,
        userRepos,
    };
}

export default connect(mapStateToProps)(App);
