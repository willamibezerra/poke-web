
import React from 'react';
import { WebView } from 'react-native-webview';

interface PokemonWebViewProps {
  onMessage: (event: any) => void;
}

const PokemonWebView: React.FC<PokemonWebViewProps> = ({ onMessage }) => {
  return (
    <WebView
      source={{ uri: 'https://poke-web-xi.vercel.app/' }}
      injectedJavaScript={`
        window.ReactNativeWebView = window.ReactNativeWebView || {};
      `}
      style={{ marginTop: 20 }}
      onMessage={onMessage}
    />
  );
};

export default PokemonWebView;
