
export default function environment(): any{
  console.log("envvv",process.env.NODE_ENV)
  var obj = {}
  if (process.env.NODE_ENV === "development"){
    obj = {
      host : "http://localhost:3001"
    }
  }
  else{
    obj = {
      host : "http://www.your-production-api.com"
    }
  }
  return obj;
}