export const images = {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [
    {
      protocol: "http", // Change to 'http' since 127.0.0.1 usually uses http
      hostname: "127.0.0.1", // Local Pocketbase server
      port: "8090", // Pocketbase's default port
      pathname: "/api/files/**", // Allow the Pocketbase image file path
    },
  ],
};
