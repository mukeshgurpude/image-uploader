import dotenv from 'dotenv';

dotenv.config();

export default (config, env, helpers) => {
    config.plugins.push(
        new helpers.webpack.DefinePlugin({
          'process.env.BUCKET': JSON.stringify(process.env.DB_URL),
          'process.env.API_KEY': JSON.stringify(process.env.PUBLIC_KEY),
        }),
    );
};
