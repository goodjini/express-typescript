import express from 'express';

// 固定のユーザー情報
const users = [
  { id: 0, name: 'J.Taro', age: 35 },
  { id: 1, name: 'S.Hanako', age: 53 },
  { id: 2, name: 'K.Jiro', age: 47 }
];

export const router = express.Router();

// ルーティング
router.get('', (req, res) => {
  res.json(users);
});

router.post('', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});
