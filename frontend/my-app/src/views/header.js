import { Typography, Row, Col, Flex } from "antd";
import { Link } from 'react-router-dom';
const { Title } = Typography;

const headerStyle = {
    height: '50px',
    width: '100%',
    backgroundColor: '#2A2E33'
}

export default function Header() {
    return (
        <div style={headerStyle}> 
            <Flex align="center" justify="center" style={{height: '100%'}}>
                <Row style={{width: '95%'}} align="center">
                    <Col span={12}>
                        <Title level={4} style={{margin: 0, color: 'white'}}>Fornecedores LTDA</Title>
                    </Col>
                    <Col span={12}>
                        <Flex align="center" style={{height: "100%", flexDirection: 'row-reverse'}}>
                            <ul style={{margin: 0}}>
                                <li style={{display: 'inline', color: 'white', marginLeft: '20px'}}>
                                    <Link to="/" style={{color: 'white'}}> Home </Link>
                                </li>
                                <li style={{display: 'inline', color: 'white', marginLeft: '20px'}}>
                                    <Link to="/list" style={{color: 'white'}}> Fornecedores </Link>
                                </li>
                            </ul>
                        </Flex>
                    </Col>
                </Row>
            </Flex>
        </div>
    )
}