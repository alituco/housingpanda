import dotenv from 'dotenv';
dotenv.config(); 

import app from './app';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀  Server ready at http://localhost:${port}`);
});
