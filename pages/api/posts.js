import fs from 'fs';

export default function posts(req, res) {
  if (req.method === 'GET') {
      var files = fs.readdirSync('./public/posts');
      var fileContArr = [];
      files.forEach((file) => {
          fileContArr.push(fs.readFileSync(`./public/posts/${file}`, 'utf-8'));
      });
      console.log(fileContArr);
      res.status(200).json(fileContArr);
  } else {

  }
}
