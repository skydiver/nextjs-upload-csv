import nextConnect from 'next-connect';
import multer from 'multer';
import csv from 'async-csv';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
});

apiRoute.use(upload.single('attachment'));

apiRoute.post(async (req, res) => {
  const { buffer } = req.file;

  /** CSV converted to JavaScript object */
  const rows = await csv.parse(buffer);
  console.log(rows);

  res.status(200).json({ status: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false
  }
};
