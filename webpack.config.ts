import webpack from "webpack";
import path from 'path';

type TypeBuild = "development" | "production"

interface EnvVariables {
    mode: TypeBuild
}


const webpackConfig = (env: EnvVariables) => {
    const isDevevelopment = env.mode === "development"
    const isProduction = env.mode === "production"

    const config: webpack.Configuration = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "index.ts"),
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
