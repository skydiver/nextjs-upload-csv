# nextjs-upload-csv
> Demo for Next.js + CSV File Upload

## Installation
1. clone repo
2. `npm install`
3. `npm run dev`
4. visit `http://localhost:3000` and upload a file
5. check your console for the CSV object


## Notes
* Important packages to install
```
async-csv
multer
next-connect
```
* Check `pages/api/uploads.js` and add your logic inside
```
apiRoute.post(async (req, res) => {
  const { buffer } = req.file;

  // CUSTOM LOGIC GOES HERE

  res.status(200).json({ status: 'success' });
});
```
