/**
 * @author Muhamad Humam
 * @email muhamadhumamm17@gmail.com
 * @create date 2020-09-02 21:35:21
 * @modify date 2020-09-02 21:35:21
 * @desc Search Component
 */

import React, { Component } from 'react';
import { Input, Form, Button, Typography } from 'antd';

const { Title } = Typography;

class SearchField extends Component {
    saveAction = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        this.props.form.validateFieldsAndScroll((err, input) => {
            if (input.username !== '') {
                onSubmit(input.username);
            }
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.saveAction}>
                <Title level={3}>Search for a Github username</Title>
                <Form.Item>
                    {getFieldDecorator('username', {
                        validateTrigger: 'onBlur'
                    })(
                        <Input placeholder="Please Input Username" />
                    )}
                </Form.Item>
                <Button htmlType="submit" type="primary" size="default" style={{ margin: '0 10px' }}> Search </Button>
                <Button htmlType="button" type="default" size="default" onClick={this.handleReset}> Clear </Button>
            </Form>
        )
    }
}
export default Form.create()(SearchField);