import { NextApiRequest, NextApiResponse } from 'next'

var hello = function (_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' })
}

export default hello