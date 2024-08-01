
export default function handler(req, res) {
  try {
    // Your API logic here
    res.status(200).json({ message: "API is working" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}