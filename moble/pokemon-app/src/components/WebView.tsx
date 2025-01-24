import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewComponent = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://poke-web-xi.vercel.app/' }} 
        style={styles.webview}
        javaScriptEnabled={true} 
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewComponent;
