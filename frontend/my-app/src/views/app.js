import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./header";

const layoutStyle = {
    height: '100vh',
    width: '100%',
}

const innerLayout = {
    height: 'calc(100vh - 100px)',
    width: '100%',
}

function AppContainer() {
    return (
        <Layout style={layoutStyle}>
            <Header/>
            <Layout style={innerLayout}>
                <Outlet/>
            </Layout>
        </Layout>
    )
}

export default AppContainer;