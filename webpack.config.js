import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "MyDesignSystem",
      type: "umd",
    },
    clean: true,
  },
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src")],
              },
            },
          },
        ],
      },
    ],
  },
};
