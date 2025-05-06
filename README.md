This is the backend task for housing panda internship!

This is a guide on how to run this project:

1. BACKEND:

```bash
# 1) move into the backend folder
cd backend

# 2) create a .env file with your Postgres URL
cat > .env <<'EOF'
DATABASE_URL=""
PORT=4000
EOF

# 3) install dependencies 
npm install

# 4) sync the schema to Postgres + generate the client
npx prisma db push      # creates tables
npx prisma generate     

# 5) start the API 
npm run dev

```

2. Frontend