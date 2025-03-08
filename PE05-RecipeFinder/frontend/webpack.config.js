module.exports = {
    devServer: {
      hot: false, // Disable Hot Module Replacement (HMR)
      liveReload: false, // Disable live reload
      allowedHosts: "all",
      client: {
        webSocketURL: "ws://localhost:3001/ws", // Update to the new port (3001)
      },
    },
  };
  