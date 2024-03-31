import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ミドルウェア設定
app.use(express.json());

// 固定のユーザー情報
const users = [
  { id: 0, name: 'J.Taro', age: 35 },
  { id: 1, name: 'S.Hanako', age: 53 },
  { id: 2, name: 'K.Jiro', age: 45 }
];

const router = express.Router();
// ルーティング
router.get('/users', (req, res) => {
  res.json(users);
});

router.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
