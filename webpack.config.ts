import webpack from "webpack";
import path from 'path';

const webpackConfig = (env: any) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "lib", "index.ts"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[contenthash].js",
            clean: true
        },

        module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            ],
        },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        
    }

    return config;
}


export default webpackConfig;