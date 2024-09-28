import React from "react";
import { WebView } from 'react-native-webview';
const Main = () => {
    return (
       
            <WebView source={{ uri: 'https://www.theserenityseed.com/' }} style={{ flex: 1 }} />
    )
}
export default Main;