import 'dotenv/config';

export default {
    version: '1.0.0',
    extra: {
        supabaseAnonKey: process.env.YOUR_REACT_NATIVE_SUPABASE_ANON_KEY,
        supabaseUrl: process.env.YOUR_REACT_NATIVE_SUPABASE_URL,

    },
};
