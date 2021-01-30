import express from 'express'
const router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.post('/', (req: express.Request, res: express.Response) => {
  console.log(req.body)
  res.send(req.body)
})

router.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.body)
  res.json(req.body)
})

export default router;
