import * as dotenv from 'dotenv';
dotenv.config();

console.log('Environment variables check:');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Present (length: ' + process.env.GEMINI_API_KEY.length + ')' : 'Missing');
console.log('PINECONE_API_KEY:', process.env.PINECONE_API_KEY ? 'Present (length: ' + process.env.PINECONE_API_KEY.length + ')' : 'Missing');
console.log('PINECONE_INDEX_NAME:', process.env.PINECONE_INDEX_NAME ? 'Present: ' + process.env.PINECONE_INDEX_NAME : 'Missing');
