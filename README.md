This is the backend task for housing panda internship!

This is a guide on how to run this project:

1. BACKEND:

```bash
# 1) move into the backend folder
cd backend

# 2) create a .env file with your Postgres URL
cat > .env <<'EOF'
DATABASE_URL="postgres://u5gk48ni817h75:pae80be390de3357830ddd2e7cf0d1d8b3e39e5a563958056070c54fa43dd1ccd@cbec45869p4jbu.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d6dvc29fhd8upr"
PORT=4000
EOF

# 3) install dependencies 
npm install

# 4) sync the schema to Postgres + generate the client
npx prisma db push      # creates tables
npx prisma generate     

# 5) start the API 
npm run dev
