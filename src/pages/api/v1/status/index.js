function status(request, response) {
  return response.status(200).json({ message: "API is running" });
}

export default status;
