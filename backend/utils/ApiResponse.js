const ApiResponse=(body,success,message)=>{
  if (!message) message = "success";
  return {
    body,
    success,
    message
  };
}

export default ApiResponse;