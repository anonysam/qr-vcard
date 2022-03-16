import AWS from "aws-sdk";

const s3Upload = async ({ key, image, type = "png" }) => {
  const s3 = new AWS.S3({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  const base64Data = new Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  //SETUP PARAMS
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `lala${key}.${type}`,
    Body: base64Data,
    ContentEncoding: "base64",
    ContentType: `image/${type}`,
  };
  //Upload to S3
  let uploadObject = {};
  try {
    uploadObject = await s3.upload(params).promise();
  } catch (err) {
    console.log(err);
  }
  return uploadObject;
};

const s3Download = async ({ key }) => {
  const s3 = new AWS.S3({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });

  //SETUP PARAMS
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Expires: 300,
  };

  const downloadURL = await s3.getSignedUrl("getObject", params);
  return downloadURL;
};
export { s3Upload, s3Download };
