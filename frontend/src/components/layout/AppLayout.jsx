import { Layout } from "antd"
import AppHeader from "./AppHeader"
import AppSider from "./AppSider"
import AppContent from "./AppContent"
import { Spin } from "antd"
import { useContext } from "react"
import { use } from "react"
import CryptoContext from "../../context/crypto-context"

export default function AppLayout() {
    const { loading } = useContext(CryptoContext);

    if (loading) {
        return <Spin fullscreen />
    }

    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    )
}